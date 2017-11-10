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
		this.initProps()
	}

	initProps = () => {
		if (this.props.title) this.setState({header: this.props.title})
	}

  handleChange = (checked) => {
		const onChange = this.props.onChange
		onChange(checked)
    this.setState({ checked })
  }

  render() {
    return (
      <dl className="uk-description-list uk-description-list-divider">
        <dt>{this.state.header}</dt>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="example-switch"
				/>
				<dd>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</dd>
      </dl>
    )
  }
}

SwitchOption.propTypes = {
	onChange: propTypes.func
}

export default SwitchOption