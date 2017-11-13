import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class TextArea extends Component {
	static displayName = "TEXT_AREA_SETTING"
	constructor() {
    super()
    this.state = {
			value:''
		}
	}
	
	componentDidMount () {

	}


  handleChange = (e) => {
		this.props.onChange(e.target.value)
		this.setState({value: e.target.value})
  }

  render() {
		const title = this.props.title ? this.props.title : null
		const description = this.props.description ? this.props.description : null

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
						{description}
					</dd>
					<hr/>
				</dl>
			</div>
    )
  }
}

TextArea.propTypes = {
    onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string
}

export default TextArea