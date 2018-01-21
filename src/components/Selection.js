import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class Selection extends Component {
	static displayName = "SELECTION"
	constructor() {
    super()
    this.state = {
			value:''
		}
	}
	
	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.value ;
	}


  handleChange = (e, value) => {
		this.props.store.settingsData[this.props.parentName] = e.target.value
		if (this.props.onChange) this.props.onChange(this.props.store.settingData)
		this.setState({value: e.target.value})
  }

  render() {

    return (
				<option>
				{this.props.value}
			</option>
    )
  }
}

Selection.defaultProps = {
    value: null
}

Selection.propTypes = {
    value: propTypes.string,
		onChange: propTypes.func,
}

export default Selection