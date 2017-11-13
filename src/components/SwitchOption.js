import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class SwitchOption extends Component {
	static displayName = "SWITCH_OPTION"
	constructor() {
    super()
    this.state = {
			checked: false,
			header: ''
		}
	}
	
	componentDidMount () {
	
	}


  handleChange = (checked) => {
		const onChange = this.props.onChange
		onChange(checked)
    this.setState({ checked })
  }

  render() {

		const title = this.props.title ? this.props.title : null
		const description = this.props.description ? this.props.description : null

    return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{title}</dt>
					<Switch
						onChange={this.handleChange}
						checked={this.state.checked}
						id="switch-option"
					/>
					<dd>
						{description}
					</dd>
				</dl>
				<hr/>
			</div>
    )
  }
}

SwitchOption.propTypes = {
	onChange: propTypes.func,
	title: propTypes.string,
	description: propTypes.string
}

export default SwitchOption