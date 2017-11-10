import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import propTypes from 'prop-types'

const styles = {

}

class Settings extends Component {
	constructor() {
    super();
    this.state = {
      styles: styles
    }
  }
  render() {
		let Toolbar = () => null
		let SwitchGroup = () => null
		let SingleUnknownProp = () => null

		if (this.props.children.forEach){
			this.props.children.forEach(child => {
				if (child.type.displayName === 'TOOLBAR') {
					Toolbar = () => child
				}
				if (child.type.displayName === 'SWITCH_GROUP') {
					SwitchGroup = () => child
				}
			})
		} else {
			SingleUnknownProp = this.props.children
		}
    return (
			<div className='settings-layout'>
				<Toolbar />
				<SwitchGroup />
				<SingleUnknownProp />
			</div>
    )
  }
}
export default Settings;