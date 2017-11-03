import React, { Component } from 'react';
import propTypes from 'prop-types'

class Settings extends Component {
  render() {
    console.log(this.props.size)
    return (
        <div>Yo</div>
    );
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