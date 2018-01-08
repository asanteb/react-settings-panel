import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { inject, observer } from 'mobx-react';

const styles = {};

@inject('store') @observer
class Selection extends Component {
	static displayName = "SELECTION"
	constructor() {
    super()
    this.state = {
			value:''
		}
	}
	
	componentDidMount () {

	}


  handleChange = (e, value) => {
		if (!this.props.store.settingsData) this.props.store.settingsData = [];
		this.props.store.settingsData[this.props.parentName] = e.target.value;
		if (this.props.onChange) this.props.onChange(this.props.store.settingData);
		this.setState({value: e.target.value});
  }

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
    value: propTypes.string,
		onChange: propTypes.func,
}

export default Selection