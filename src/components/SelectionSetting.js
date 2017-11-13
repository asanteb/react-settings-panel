import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'

const styles = {

}

class SelectionSetting extends Component {
	static displayName = "SELECTION_SETTING"
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
		const Selections = []

		if (this.props.children.forEach) {
			this.props.children.forEach(child => {
				if (child.type.displayName === 'SELECTION') {
					Selections.push(child)
				}
			})
		}

    return (
			<div>
				<dl className="uk-description-list uk-description-list-divider">
					<dt>{this.props.title}</dt>
						<div className="uk-margin">
							<select className='uk-select'>
								{
									Selections.map(box => box)
								}
							</select>
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

SelectionSetting.propTypes = {
    onValue: propTypes.func,
		onSubmit: propTypes.func,
		title: propTypes.string,
		description: propTypes.string
}

export default SelectionSetting