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
    this.setState({ checked })
  }

  render() {
    return (
      <div>
        <h4>{this.state.header}</h4>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="example-switch"
        />
      </div>
    )
  }
}
export default SwitchOption