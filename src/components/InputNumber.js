import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class InputNumber extends Component {
	static displayName = "INPUT_NUMBER"
	constructor() {
		super()
		this.state = {
				value:0
		}
	}

	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.value ;
	}


  handleChange = (e) => {
		if (this.props.onChange) this.props.onChange(this.props.store.settingsData)
		this.props.store.settingsData[this.props.name] = parseFloat(e.target.value)
		this.setState({value: parseFloat(e.target.value)})
  }

  render() {

	return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
					<input
						type='number'
						className='uk-input'
						value={this.state.value}
						onChange={this.handleChange}
						min={this.props.min}
						max={this.props.max}
						step={this.props.step}
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


InputNumber.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	title: null, 
	description: null
};


InputNumber.propTypes = {
	onValue: propTypes.func,
	onSubmit: propTypes.func,
	title: propTypes.string,
	description: propTypes.string,
	min: propTypes.number,
	max: propTypes.number,
	step: propTypes.number,
	name: propTypes.string.isRequired
}

export default InputNumber