import React, { Component } from 'react'
import Switch from 'react-switch'
import md5 from 'md5'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'
const styles = {

}

@observer
class SelectionSetting extends Component {
	static displayName = "SELECTION_SETTING"
	constructor() {
	super()
	this.state = {
			value: '',
			loaded: false
		}
	}
	
	componentWillMount() {
		this.props.store.settingsData[this.props.name] = this.state.value ;
	}


  handleChange = (e, def) => {
		// if (this.state.value && loaded)
		this.props.store.settingsData[this.props.name] = e.target.value
		if (this.props.onChange) this.props.onChange(this.props.store.settingsData)
		this.setState({value: e.target.value})
  }

  render() {
		const Selections = []
		let defaultVal = this.state.value
		if (this.props.children.forEach) {
			this.props.children.forEach((child, i) => {
				if (child.type.displayName === 'SELECTION') {
					const c = React.cloneElement(child, {
						store: this.props.store,
						key: md5(`selection${i}`),
						parentName: this.props.name
					})
					Selections.push(c)
					if (i === 0 && !this.state.value) {
					 defaultVal = c.props.value
					}
				}
			})
		}

	return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
						<div className="uk-margin">
							<select className='uk-select'
								onChange={(e) => this.handleChange(e, defaultVal)}
							>
								<option value=''>Select an Item</option>
								{Selections.map(box => box)}
							</select>
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

SelectionSetting.defaultProps = {
	title: null,
	description: null
}

SelectionSetting.propTypes = {
	onValue: propTypes.func,
		onChange: propTypes.func,
		title: propTypes.string,
		description: propTypes.string,
		name: propTypes.string.isRequired
}

export default SelectionSetting