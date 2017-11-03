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
    console.log(this.props.size)
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

Settings.propTypes = {
    // size: propTypes.string.required,
    size: function(props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      },
}

export default Settings;