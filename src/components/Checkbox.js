import React, { Component } from 'react';
import Switch from 'react-switch';
import propTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const styles = {};

@inject('store') @observer
class Checkbox extends Component {
  static displayName = "CHECKBOX";

  constructor() {
    super();
    this.state = {
      value: false
    }
  }

  componentDidMount() {
    // nothing in here
  }


  handleChange = (e, value) => {
    this.props.store.settingsData[this.props.parentName][value] = !this.state.value;
    if (this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.setState({ value: !this.state.value })
  }

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
    )
  }
}

Checkbox.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}

export default Checkbox
