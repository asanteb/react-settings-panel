import React, { Component } from 'react';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {};

@observer
class Selection extends Component {
  static displayName = "SELECTION";

  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  componentDidMount() { }


  handleChange = (e, value) => {
    this.props.store.settingsData[this.props.parentName] = e.target.value;
    if (this.props.onChange) this.props.onChange(this.props.store.settingData);
    this.setState({ value: e.target.value });
  };

  render() {
    const value = this.props.value ? this.props.value : null;
    return (
      <option>
        {value}
      </option>
    )
  }
}

Selection.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};

export default Selection
