import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import md5 from 'md5'
import { inject, observer } from 'mobx-react';

const styles = {};

@inject('store') @observer
class RadioGroup extends Component {
	static displayName = "RADIO_SETTING"
	constructor() {
		super()
		this.state = {
			value:''
		}
	}
	
	componentDidMount () {}

	render() {
		const title = this.props.title ? this.props.title : null;
		const description = this.props.description ? this.props.description : null;
		const Radios = [];
		if (!this.props.store.settingsData) this.props.store.settingsData = [];
		if (!this.props.store.settingsData[this.props.name]){
			this.props.store.settingsData[this.props.name] = {};
		}

		if (this.props.children.forEach) {
			this.props.children.forEach((child, i) => {
				if (child.type.wrappedComponent.displayName === 'RADIO') {
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
		description: propTypes.string,
		name: propTypes.string.isRequired
}

export default RadioGroup