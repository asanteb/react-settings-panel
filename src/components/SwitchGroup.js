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
			<div className='settings-panel'>
				<div uk-grid='uk-grid'>
				<div>
					<div className="uk-card uk-card-default uk-card-body">Item</div>
				</div>
				<div>
						<div className="uk-card uk-card-default uk-card-body">Item</div>
				</div>
				<div>
						<div className="uk-card uk-card-default uk-card-body">Item</div>
				</div>
				</div>
			</div>
    )
  }
}
export default SwitchGroup;