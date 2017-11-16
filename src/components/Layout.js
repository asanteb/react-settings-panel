import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import md5 from 'md5'
import propTypes from 'prop-types'
import mobX from '../mobx/store.js';
import { Provider } from 'mobx-react'
import {
	Grid,
	Col,
	Row
} from 'react-flexbox-grid'

import UIkit from 'uikit';
import Icons from '../assets/js/uikit-icons.min.js';
import '../assets/css/uikit.min.css';
import '../assets/css/main.css';
UIkit.use(Icons)

const defaultStyles = {
  backgroundColor: '#728ad8',
  color: 'white'
}

class Settings extends Component {
	constructor() {
    super();
    this.state = {
      styles: defaultStyles
    }
	}
	componentDidMount () {
		this.loadStyles()
	}
	loadStyles = () => {
    const styles = { ...this.state.styles }
    const userStyles = this.props
    if (userStyles.color) styles.backgroundColor = userStyles.color
    if (userStyles.textColor) styles.textColor = userStyles.color
    this.setState({styles: styles})
  }

	submitData = () => {
		this.props.onSubmit({...mobX.settingsData})
	}

  render() {
		let Toolbar = null
		let Groups = []
		let SingleUnknownProp = null
		let Submit = (
			<p uk-margin='' style={{textAlign: 'right', padding: '1.5em'}}>
				<button style={{backgroundColor: 'white'}} className="uk-button uk-button-default">Cancel</button>
				<button onClick={this.submitData} className="uk-button uk-button-primary">Submit</button>
			</p>
		)

		if (this.props.children.forEach){
			this.props.children.forEach(child => {
				if (child.type.displayName === 'TOOLBAR') {
					Toolbar = React.cloneElement(child, {
							store: mobX
					})
				}
				if (child.type.displayName === 'GROUP') {
					const g = React.cloneElement(child, {
							store: mobX
						})
					
					Groups.push(g)
				}
			})
		} else {
			const child = this.props.children
			SingleUnknownProp = React.cloneElement(child, {
					store: mobX
			})
	
		}
    return (
			<Provider store={mobX}>
				<div className='settings-layout' style={this.state.styles}>
					{Toolbar}
					<Grid fluid className='settings-main-container'>
						<Row style={{margin: '0 auto'}}>
								{
									Groups.map((Group, i) => {
										return <Col xs key={md5(`group${i}`)}>{Group}</Col>
									}) 
								}
						</Row>
					</Grid>
					{SingleUnknownProp}
					{Submit}
				</div>
			</Provider>
    )
  }
}
export default Settings;