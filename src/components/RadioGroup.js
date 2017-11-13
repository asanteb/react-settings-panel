import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class RadioGroup extends Component {
	static displayName = "RADIO_SETTING"
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
		const Radios = []

		if (this.props.children.forEach) {
			this.props.children.forEach(child => {
				if (child.type.displayName === 'RADIO') {
					Radios.push(child)
				}
			})
		}

    return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
						<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
							{
								Radios.map(radio => radio)
							}
						</div>
					<dd>
						{description}
					</dd>
					<hr/>
				</dl>
			</div>
    )
  }
}

RadioGroup.propTypes = {
    onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string
}

export default RadioGroup