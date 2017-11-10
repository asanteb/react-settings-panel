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
			<div className='uk-card uk-card-default uk-card-body'>
					{this.props.children}
			</div>
    )
  }
}
export default SwitchGroup;