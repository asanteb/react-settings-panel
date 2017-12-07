import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class SwitchOption extends Component {
	static displayName = "SWITCH_OPTION"
	constructor() {
	super()
	this.state = {
			checked: false,
			header: ''
		}
	}
	
	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.checked ;
	}


	handleChange = (checked) => {
		const onChange = this.props.onChange
		this.props.store.settingsData[this.props.name] = checked
		if (this.props.onChange) onChange(this.props.store.settingsData)
		this.setState({ checked })
	}

	render() {

	return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
					<Switch
						onChange={this.handleChange}
						checked={this.state.checked}
						id="switch-option"
					/>
					<dd>
						{this.props.description}
					</dd>
				</dl>
				<hr/>
			</div>
	)
	}
}

SwitchOption.defaultProps = {
	title: null,
	description: null
}


SwitchOption.propTypes = {
	onChange: propTypes.func,
	title: propTypes.string,
	description: propTypes.string,
	name: propTypes.string.isRequired
}

export default SwitchOption