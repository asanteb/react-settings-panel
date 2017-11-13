import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class Selection extends Component {
	static displayName = "SELECTION"
	constructor() {
    super()
    this.state = {
			value:''
		}
	}
	
	componentDidMount () {

	}


  handleChange = (e, name) => {
		this.props.onChange({name: name, value: e.target.value})
		this.setState({value: e.target.value})
  }

  render() {
		const name = this.props.name ? this.props.name : null

    return (
				<option
					onChange={(e) => this.handleChange(e, name)}
				>
				{name}
			</option>
    )
  }
}

Selection.propTypes = {
    name: propTypes.string,
		onChange: propTypes.func,
}

export default Selection