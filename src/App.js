import React, { Component } from 'react'
import Layout from './components/Layout'
import SwitchGroup from './components/SwitchGroup'
import SwitchOption from './components/SwitchOption'
import Toolbar from './components/Toolbar'

import propTypes from 'prop-types'

const defaultStyles = {
  backgroundColor: 'red',
  color: 'white'
}

class Settings extends Component {
	constructor() {
    super();
    this.state = {
      styles: defaultStyles
    }
  }

  componentDidMount() {
    this.loadStyles()
  }

  loadStyles = () => {
    const styles = { ...this.state.styles }
    const userStyles = this.props

    if (userStyles.color) styles.backgroundColor = userStyles.color
    if (userStyles.textColor) styles.textColor = userStyles.color
    this.setState({styles: styles})
  }

  handleChange = (checked) => {
    // console.log(checked)
  }

  render() {
    
    const styles = this.state.styles
    return (
			<div style={styles}>
        <Layout>
          <Toolbar />
          <SwitchGroup>
            <SwitchOption title="Switch One" onChange={this.handleChange}/>
            <SwitchOption title="Switch Two" onChange={this.handleChange}/>
            <SwitchOption title="Switch Three" onChange={this.handleChange}/>
          </SwitchGroup>
          <SwitchGroup>
            <SwitchOption title="Switch One" onChange={this.handleChange}/>
            <SwitchOption title="Switch Two" onChange={this.handleChange}/>
            <SwitchOption title="Switch Three" onChange={this.handleChange}/>
          </SwitchGroup>
          <SwitchGroup>
          <SwitchOption title="Switch One" onChange={this.handleChange}/>
          <SwitchOption title="Switch Two" onChange={this.handleChange}/>
          <SwitchOption title="Switch Three" onChange={this.handleChange}/>
          <SwitchOption title="Switch 4" onChange={this.handleChange}/>
        </SwitchGroup>
        </Layout>
			</div>
    )
  }
}

Settings.propTypes = {
    // size: propTypes.string.required,
    // !/red/.test(props[propName])
    color: function(props, propName, componentName) {
        if (!(typeof props[propName] === 'string')) {
          return new Error(
            `Invalid prop ${propName} of type '${typeof props[propName]}' `+ 
            `supplied to ${componentName}\n Expected a 'String'`
          )
        }
      },
}

export default Settings;