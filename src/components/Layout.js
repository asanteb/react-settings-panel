import React, { Component } from 'react';
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
    return (
			<div className='settings-layout'>
				LoLOLolOl
				{this.props.children}
			</div>
    )
  }
}
export default Settings;