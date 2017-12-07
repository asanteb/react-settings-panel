import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class InputSetting extends Component {
	static displayName = "INPUT_SETTING"
	constructor() {
	super()
	this.state = {
			checked: false,
			header: '',
			value:''
		}
	}

	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.value ;
	}


  handleChange = (e) => {
		if (this.props.onChange) this.props.onChange(this.props.store.settingsData)
		this.props.store.settingsData[this.props.name] = e.target.value
		this.setState({value: e.target.value})
  }

  render() {

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
						{this.props.description}
					</dd>
					<hr/>
				</dl>
			</div>
	)
  }
}

InputSetting.defaultProps = {
	title: null, 
	description: null
};


InputSetting.propTypes = {
	onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string,
		name: propTypes.string.isRequired
}

export default InputSetting