import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import md5 from 'md5'
import { observer } from 'mobx-react'

const styles = {

}

@observer
class RadioGroup extends Component {
	static displayName = "RADIO_SETTING"
	constructor() {
		super()
		this.state = {
			value:''
		}
	}
	
	componentWillMount() {
		this.props.store.settingsData[this.props.name] = {} ;
	}

	render() {
		const Radios = []

		if (this.props.children.forEach) {
			this.props.children.forEach((child, i) => {
				if (child.type.displayName === 'RADIO') {
					const c = React.cloneElement(child, {
						store: this.props.store,
						key: md5(`radio${i}`),
						parentName: this.props.name
					})
					Radios.push(c)
				}
			})
		}

		return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
						<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
							
							<form action="" >
								{Radios.map(radio => radio)}
							</form>
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

RadioGroup.defaultProps = {
		title: null,
		description: null 
}

RadioGroup.propTypes = {
		onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string,
		name: propTypes.string.isRequired
}

export default RadioGroup