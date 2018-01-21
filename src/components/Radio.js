import React, { Component } from 'react';
import Switch from 'react-switch';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {};

@observer
class Radio extends Component {
  static displayName = "RADIO";

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    if (this.props.initialValue !== null && this.props.initialValue !== undefined) this.setState({ value: this.initialValue });
  }

  validate = () => {
    return this.props.store[this.props.parentName][this.props.value];
  };

  handleChange = (e, value) => {
    if (this.props.store) {
      if (!this.props.store.settingsData) this.props.store.settingsData = {};
      this.props.store.settingsData[this.props.parentName] = value;
    }
    if (this.props.store && this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.setState({ value: e.target.value }, () => {
      if (this.props.hasOwnProperty("onChange") && !this.props.store) {
        this.props.onChange(e.target.value);
      }
    });
  };

  render() {
    const value = this.props.value ? this.props.value : '';
    return (
      <label>
        <input
          name={this.props.parentName}
          value={this.props.value}
          type='radio'
          className='uk-radio'
          readOnly
          onClick={(e) => this.handleChange(e, value)}
          id="settings-radio"
        />
        <span style={{ padding: '0.5em' }}>{value}</span>
      </label>
    );
  }
}

Radio.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  initialValue: propTypes.bool
};

export default Radio;
