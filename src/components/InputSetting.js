import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class InputSetting extends Component {
	static displayName = "INPUT_SETTING"
	constructor() {
    super()
    this.state = {
			checked: false,
			header: '',
			value:''
		}
	}
	
	componentDidMount () {
		this.initProps()
	}

	initProps = () => {
		if (this.props.title) this.setState({header: this.props.title})
	}

  handleChange = (e) => {
		this.props.onChange(e.target.value)
		this.setState({value: e.target.value})
  }

  render() {
    return (
      <dl className="uk-description-list uk-description-list-divider">
        <dt>{this.state.header}</dt>
				<input
					type='text'
					className='uk-input'
					value={this.state.value}
          onChange={this.handleChange}
          id="settings-input"
				/>
				<dd>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</dd>
      </dl>
    )
  }
}

InputSetting.propTypes = {
    onValue: propTypes.func,
    onSubmit: propTypes.func
}

export default InputSetting