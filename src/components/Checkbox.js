import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class Checkbox extends Component {
	static displayName = "CHECKBOX"
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
			<label>
				<input
					type='checkbox'
					className='uk-checkbox'
					onChange={(e) => this.handleChange(e, name)}
					id="settings-checkbox"
				/>
				<span style={{padding: '0.5em'}}>{name}</span>
			</label>
    )
  }
}

Checkbox.propTypes = {
    name: propTypes.string,
		onChange: propTypes.func,
}

export default Checkbox