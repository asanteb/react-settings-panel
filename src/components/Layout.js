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
		
		// if (this.props.children.forEach){
		// 	this.props.children.forEach(child => {
		// 		console.log(child.)
		// 	})
		// }
		console.log(this.props.children.type.displayName)
    return (
			<div className='settings-layout'>
				<nav className="uk-navbar uk-navbar-container uk-margin">
					<div className="uk-navbar-left">
						<a className="uk-navbar-toggle" href="#">
								<FontAwesome
								className='super-crazy-colors'
								name='rocket'
								size='2x'
								spin
								style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>
						</a>
					</div>
				</nav>
				LoLOLolOl
				{this.props.children}
			</div>
    )
  }
}
export default Settings;