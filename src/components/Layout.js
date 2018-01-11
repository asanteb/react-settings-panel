import React, { Component } from 'react'
import md5 from 'md5'
import mobX from '../mobx/store.js';
import { Provider } from 'mobx-react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import '../assets/css/uikit.min.css';
import '../assets/css/main.css';
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
    }
  }

  componentDidMount() {
    this.loadStyles()
  }

  loadStyles = () => {
    const styles = { ...this.state.styles };
    const { color, textColor } = this.props;
    if (color) styles.backgroundColor = color;
    if (textColor) styles.textColor = textColor;
    this.setState({ styles: styles })
  };

  submitData = () => {
    this.props.onSubmit({ ...this.state.mobX.settingsData })
  };

  clearData = () => {
    const store = this.state.mobX;
    store.settingsData = {};
    this.setState({ mobX: store })
  };

  render() {
    let Toolbar = null;
    let Groups = [];
    let SingleUnknownProp = null;
    const { noButtons } = this.props;
    let Submit = null;

    if (noButtons) Submit = null;
    else Submit = (
      <p className='uk-margin' style={{ textAlign: 'right', padding: '1.5em' }}>
        <button onClick={this.clearData} style={{ backgroundColor: 'white' }} className="uk-button uk-button-default">Cancel</button>
        <button onClick={this.submitData} className="uk-button uk-button-primary">Submit</button>
      </p>
    );

    if (this.props.children.forEach) {
      this.props.children.forEach(child => {
        if (child.type.wrappedComponent.displayName === 'TOOLBAR') {
          Toolbar = React.cloneElement(child, {
            store: this.state.mobX
          })
        }
        if (child.type.wrappedComponent.displayName === 'GROUP') {
          const g = React.cloneElement(child, {
            store: this.state.mobX
          });

          Groups.push(g)
        }
      })
    } else {
      const child = this.props.children;
      SingleUnknownProp = React.cloneElement(child, {
        store: this.state.mobX
      })

    }
    return (
      <Provider store={this.state.mobX}>
        <div className='settings-layout' style={this.state.styles}>
          {Toolbar}
          <Grid fluid className='settings-main-container'>
            <Row style={{ margin: '0 auto' }}>
              {
                Groups.map((Group, i) => {
                  return <Col xs key={md5(`group${i}`)}>{Group}</Col>
                })
              }
            </Row>
          </Grid>
          {SingleUnknownProp}
          {Submit}
        </div>
      </Provider>
    )
  }
}

export default Settings;