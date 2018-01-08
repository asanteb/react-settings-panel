import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { inject, observer } from 'mobx-react';

const styles = {};

@inject('store') @observer
class InputSetting extends Component {
	static displayName = "INPUT_SETTING"
	constructor() {
	super();
	this.state = {
			checked: false,
			header: '',
			value: ''
		}
	}

	componentDidMount () {
		// this.initProps()
		this.initialValue = this.props.initialValue ? this.props.initialValue : null;
		if (this.initialValue) this.setState({ value: this.initialValue });
	}


  handleChange = (e) => {
		if (this.props.onChange) this.props.onChange(this.props.store.settingsData);
		this.props.store.settingsData[this.props.name] = e.target.value;
		this.setState({value: e.target.value});
  }

  render() {
		const title = this.props.title ? this.props.title : null;
		const description = this.props.description ? this.props.description : null;

	return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
					<input
						type='text'
						className='uk-input'
						value={this.state.value}
						onChange={this.handleChange}
						id="settings-input"
					/>
					<dd>
						{description}
					</dd>
					<hr/>
				</dl>
			</div>
	)
  }
}

InputSetting.propTypes = {
	onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string,
		name: propTypes.string.isRequired,
		initialValue: propTypes.string
};

export default InputSetting
