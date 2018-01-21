import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import md5 from 'md5';
import propTypes from 'prop-types';
import mobX from '../mobx/store.js';
import { Provider } from 'mobx-react';
import {
  Grid,
  Col,
  Row
} from 'react-flexbox-grid';

import UIkit from 'uikit';
import '../assets/css/uikit.min.css';
import '../assets/css/main.css';

import SubmitButtons from './Submit';
// UIkit.use(Icons)

const defaultStyles = {
  backgroundColor: '#728ad8',
  color: 'white'
};

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      styles: defaultStyles,
      mobX
    };
  }

  componentDidMount() {
    this.loadStyles();
  }

  loadStyles = () => {
    const styles = { ...this.state.styles };
    const userStyles = this.props;
    if (userStyles.color) styles.backgroundColor = userStyles.color;
    if (userStyles.textColor) styles.textColor = userStyles.textColor;
    this.setState({ styles: styles });
  };

  submitData = () => {
    this.props.onSubmit({ ...this.state.mobX.settingsData });
  };
  clearData = () => {
    const store = this.state.mobX;
    store.settingsData = {};
    this.setState({ mobX: store });
  };

  render() {
    const width = typeof this.props.width === 'string' && this.props.width.includes('uk-width') ? this.props.width : "";
    let Toolbar = null;
    let Groups = [];
    let SingleUnknownProp = null;
    let Submit = (
      <p className='uk-margin' style={{ textAlign: 'right', padding: '1.5em' }}>
        <button onClick={this.clearData} style={{ backgroundColor: 'white' }} className="uk-button uk-button-default">Cancel</button>
        <button onClick={this.submitData} className="uk-button uk-button-primary">Submit</button>
      </p>
    );

    if (this.props.children.forEach) {
      this.props.children.forEach(child => {
        if (child.type.displayName === 'TOOLBAR') {
          Toolbar = React.cloneElement(child, {
            store: this.state.mobX
          });
        }
        if (child.type.displayName === 'GROUP') {
          const g = React.cloneElement(child, {
            store: this.state.mobX
          });

          Groups.push(g);
        }
      });
    } else {
      const child = this.props.children;
      SingleUnknownProp = React.cloneElement(child, {
        store: this.state.mobX
      });

    }
    return (
      <Provider store={this.state.mobX}>
        <div className={`settings-layout ${width}`} style={this.state.styles}>
          {Toolbar}
          <Grid fluid className='settings-main-container'>
            <Row style={{ margin: '0 auto' }}>
              {
                Groups.map((Group, i) => {
                  return <Col xs key={md5(`group${i}`)}>{Group}</Col>;
                })
              }
            </Row>
          </Grid>
          {SingleUnknownProp}
          {Submit}
        </div>
      </Provider>
    );
  }
}

Settings.propTypes = {
  onSubmit: propTypes.func,
  color: propTypes.string,
  textColor: propTypes.string,
  children: propTypes.node,
  noButtons: propTypes.bool,
  width: propTypes.string
};

export default Settings;
