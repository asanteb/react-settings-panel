import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {};

@observer
class Submit extends Component {
  static displayName = "SUBMIT";

  constructor() {
    super();
    this.state = {
      styles: styles
    };
  }

  render() {
    return (
      <p className='uk-margin' style={{ textAlign: 'right', padding: '1.5em' }}>
        <button onClick={this.props.clear} style={{ backgroundColor: 'white' }} className="uk-button uk-button-default">Cancel</button>
        <button onClick={this.props.submit} className="uk-button uk-button-secondary">Submit</button>
      </p>
    );
  }
}

Submit.propTypes = {
  clear: propTypes.func,
  submit: propTypes.func,
};

export default Submit;
