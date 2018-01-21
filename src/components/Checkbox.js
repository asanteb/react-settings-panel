import React, { Component } from 'react';
import Switch from 'react-switch';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';


const styles = {};

@observer
class Checkbox extends Component {
  static displayName = "CHECKBOX";

  constructor() {
    super();
    this.state = {
      value: false
    };
  }

  componentDidMount() {
    if (this.props.initialValue !== null && this.props.initialValue !== undefined) this.setState({ value: this.initialValue });
  }

  handleChange = (e, value) => {
    if (this.props.store) this.props.store.settingsData[this.props.parentName][value] = !this.state.value;
    if (this.props.store && this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.setState({ value: !this.state.value }, () => {
      if (this.props.hasOwnProperty("onChange")) {
        this.props.onChange(!this.state.value);
      }
    });
  };

  render() {
    const value = this.props.value ? this.props.value : '';

    return (
      <label>
        <input
          type='checkbox'
          className='uk-checkbox'
          onChange={(e) => this.handleChange(e, value)}
          id="settings-checkbox"
        />
        <span style={{ padding: '0.5em' }}>{value}</span>
      </label>
    );
  }
}

Checkbox.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  initialValue: propTypes.bool
};

export default Checkbox;
