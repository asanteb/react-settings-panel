import React, { Component } from 'react'
import Layout from './components/Layout'
import SwitchGroup from './components/SwitchGroup'
import SwitchOption from './components/SwitchOption'
import InputSetting from './components/InputSetting'
import TextAreaSetting from './components/TextAreaSetting'
import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
import Radio from './components/Radio'
import RadioGroup from './components/RadioGroup'
import Selection from './components/Selection'
import SelectionSetting from './components/SelectionSetting'


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

  handleChange = (change) => {
    console.log(change)
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
            <InputSetting title="Input One" onChange={this.handleChange}/>
            <SelectionSetting title="Selection" onChange={this.handleChange}>
              <Selection name='A' onChange={this.handleChange}/>
              <Selection name='B' onChange={this.handleChange}/>
              <Selection name='C' onChange={this.handleChange}/>
            </SelectionSetting>
          </SwitchGroup>
          <SwitchGroup>
            <SwitchOption title="Switch One" onChange={this.handleChange}/>
            <SwitchOption title="Switch Three" onChange={this.handleChange}/>
            <TextAreaSetting title="TextArea" onChange={this.handleChange}/>
            <RadioGroup title="Radio" onChange={this.handleChange}>
              <Radio name='A' onChange={this.handleChange}/>
              <Radio name='B' onChange={this.handleChange}/>
              <Radio name='C' onChange={this.handleChange}/>
            </RadioGroup>
          </SwitchGroup>
          <SwitchGroup>
          <SwitchOption title="Switch One" onChange={this.handleChange}/>
          <SwitchOption title="Switch Two" onChange={this.handleChange}/>
          <SwitchOption title="Switch Three" onChange={this.handleChange}/>
          <SwitchOption title="Switch 4" onChange={this.handleChange}/>
          <CheckboxGroup title="Switch 4" onChange={this.handleChange}>
            <Checkbox name='A' onChange={this.handleChange}/>
            <Checkbox name='B' onChange={this.handleChange}/>
            <Checkbox name='C' onChange={this.handleChange}/>
            <Checkbox name='D' onChange={this.handleChange}/>
            <Checkbox name='E' onChange={this.handleChange}/>
            <Checkbox name='F' onChange={this.handleChange}/>
          </CheckboxGroup>
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