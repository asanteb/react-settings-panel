import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class Radio extends Component {
	static displayName = "RADIO"
	constructor() {
		super()
		this.state = {
			value:''
		}
	}
	
	componentWillMount() {
		this.props.store.settingsData[this.props.parentName] = this.state.value ;
	}

	validate = () => {
		return this.props.store[this.props.parentName][this.props.value]
	}

	handleChange = (e, value) => {
		this.props.store.settingsData[this.props.parentName] = value
		if (this.props.onChange) this.props.onChange(this.props.store.settingsData)
		this.setState({value: e.target.value})
	}

	render() {
		
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
				<span style={{padding: '0.5em'}}>{this.props.value}</span>
			</label>
		)
	}
}

Radio.defaultProps = {
		value: ''
}

Radio.propTypes = {
		value: propTypes.string,
		onChange: propTypes.func,
}

export default Radio