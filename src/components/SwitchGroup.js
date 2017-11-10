import React, { Component } from 'react';
import propTypes from 'prop-types'

const styles = {

}

class SwitchGroup extends Component {
	static displayName = "SWITCH_GROUP"
	constructor() {
    super();
    this.state = {
      styles: styles
    }
  }
  render() {
    return (
			<div className='settings-group'>
				<div uk-grid='uk-grid'>
					{this.props.children}
				</div>
			</div>
    )
  }
}
export default SwitchGroup;