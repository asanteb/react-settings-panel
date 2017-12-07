import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'


const styles = {

}

@observer
class Checkbox extends Component {
	static displayName = "CHECKBOX"
	constructor() {
	super()
	this.state = {
			value: false
		}
	}

	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.value ;
	}


  handleChange = (e, value) => {
		this.props.store.settingsData[this.props.parentName][value] = !this.state.value
		if (this.props.onChange) this.props.onChange(this.props.store.settingsData)
		this.setState({value: !this.state.value})
  }

  render() {

	return (
			<label>
				<input
					type='checkbox'
					className='uk-checkbox'
					onChange={(e) => this.handleChange(e, value)}
					id="settings-checkbox"
				/>
				<span style={{padding: '0.5em'}}>{this.props.value}</span>
			</label>
	)
  }
}

Checkbox.defaultProps = {
	value: ''
}

Checkbox.propTypes = {
	value: propTypes.string,
	onChange: propTypes.func,
}

export default Checkbox