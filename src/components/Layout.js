import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import md5 from 'md5'
import propTypes from 'prop-types'
import {
	Grid,
	Col,
	Row
} from 'react-flexbox-grid'

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
		let SwitchGroup = []
		let SingleUnknownProp = () => null

		if (this.props.children.forEach){
			this.props.children.forEach(child => {
				if (child.type.displayName === 'TOOLBAR') {
					Toolbar = () => child
				}
				if (child.type.displayName === 'SWITCH_GROUP') {
					SwitchGroup.push(child)
				}
			})
		} else {
			SingleUnknownProp = this.props.children
		}
    return (
			<div className='settings-layout'>
				<Toolbar />
				<Grid fluid className='settings-main-container'>
					<Row style={{margin: '0 auto'}}>
							{ SwitchGroup.map((group, i) => <Col xs key={md5(`group${i}`)}>{group}</Col>) }
					</Row>
				</Grid>
				<SingleUnknownProp />
			</div>
    )
  }
}
export default Settings;