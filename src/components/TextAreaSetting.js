import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class TextArea extends Component {
	static displayName = "TEXT_AREA_SETTING"
	constructor() {
	super()
	this.state = {
			value:''
		}
	}
	
	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.value ;
	}


  handleChange = (e) => {
		if (this.props.onChange) this.props.onChange(e.target.value)
		this.props.store.settingsData[this.props.name] = e.target.value
		this.setState({value: e.target.value})
  }

  render() {

	return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
					<textarea
						type='text'
						className='uk-textarea'
						value={this.state.value}
						onChange={this.handleChange}
						id="settings-textArea"
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

TextArea.defaultProps = {
	title: null,
	description: null
}

TextArea.propTypes = {
	onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string,
		name: propTypes.string.isRequired
}

export default TextArea