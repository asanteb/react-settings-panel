import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import propTypes from 'prop-types'

const styles = {

}

class Toolbar extends Component {
	static displayName = "TOOLBAR"
	constructor() {
    super();
    this.state = {
      styles: styles
    }
  }
  render() {
    return (
			<div className='settings-toolbar'>
				<nav className="uk-navbar uk-navbar-container uk-margin">
					<div className="uk-navbar-left">
					<a className="uk-navbar-toggle" href="#">
						<FontAwesome
							name='bars'
							size='2x'
							/>
						</a>
					</div>
				</nav>
			</div>
    )
  }
}
export default Toolbar;