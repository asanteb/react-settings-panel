import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import md5 from 'md5'
import { observer } from 'mobx-react'


const styles = {

}
@observer
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
	if (this.props.onChange) this.props.onChange(e.target.value)
		this.setState({value: e.target.value})
	}

	render() {
		const Checkboxes = []

		if (!this.props.store.settingsData[this.props.name]){
			this.props.store.settingsData[this.props.name] = {}
		}

		if (this.props.children.forEach) {
			this.props.children.forEach((child, i) => {
				if (child.type.displayName === 'CHECKBOX') {
					const c = React.cloneElement(child, {
						store: this.props.store,
						key: md5(`boxes${i}`),
						parentName: this.props.name
					})
					Checkboxes.push(c)
				}
			})
		}

		return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
						<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
							{Checkboxes.map(box => box)}
						</div>
					<dd>
						{this.props.description}
					</dd>
					<hr/>
				</dl>
			</div>
		)
	}
}

CheckboxSetting.defaultProps = {
		title: null,
		description: null
}

CheckboxSetting.propTypes = {
		onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string,
		name: propTypes.string.isRequired
}

export default CheckboxSetting