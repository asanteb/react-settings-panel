import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import propTypes from 'prop-types'
import { observer } from 'mobx-react'
const styles = {

}
@observer
class Submit extends Component {
	static displayName = "SUBMIT"
	constructor() {
    super();
    this.state = {
      styles: styles
    }
  }
  render() {
    return (
			<p className='uk-margin' style={{textAlign: 'right', padding: '1.5em'}}>
        <button style={{backgroundColor: 'white'}} className="uk-button uk-button-default">Default</button>
        <button className="uk-button uk-button-primary">Primary</button>
      </p>
    )
  }
}
export default Submit