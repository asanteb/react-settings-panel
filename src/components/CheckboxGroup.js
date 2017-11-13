import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class CheckboxSetting extends Component {
	static displayName = "CHECKBOX_SETTING"
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
		const Checkboxes = []

		if (this.props.children.forEach) {
			this.props.children.forEach(child => {
				if (child.type.displayName === 'CHECKBOX') {
					Checkboxes.push(child)
				}
			})
		}

    return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
						<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
							{
								Checkboxes.map(box => box)
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

CheckboxSetting.propTypes = {
    onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string
}

export default CheckboxSetting