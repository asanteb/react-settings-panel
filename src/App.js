import React, { Component } from 'react'
import {
  Toolbar,
  Group,
  SettingsPanel,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Option,
  Selection,
  Input,
  TextArea
} from '../index.js'
import propTypes from 'prop-types'

class Settings extends Component {
	constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {}

  handleChange = (change) => {
    //console.log(change)
  }

  handleSubmit = (data) => {
    console.log(data)
  }

  render() {
    
    const styles = this.state.styles
    return (
			<div >
        <SettingsPanel color={'#728ad8'} onSubmit={this.handleSubmit}>
          <Toolbar store={'sup'}/>
          <Group>
            <Switch title="Switch One" name={'a'} onChange={this.handleChange}/>
            <Switch title="Switch Two" name={'b'} onChange={this.handleChange}/>
            <Switch title="Switch Three" name={'c'} onChange={this.handleChange}/>
            <Input title="Input One" name={'d'} onChange={this.handleChange}/>
            <Selection title="Selection " name={'e'} onChange={this.handleChange}>
              <Option value='a' onChange={this.handleChange}/>
              <Option value='b' onChange={this.handleChange}/>
              <Option value='c' onChange={this.handleChange}/>
            </Selection>
          </Group>
          <Group>
            <Switch title="Switch One" name='1' onChange={this.handleChange}/>
            <Switch title="Switch Three" name='2' onChange={this.handleChange}/>
            <TextArea title="TextArea" name='3' onChange={this.handleChange}/>
            <RadioGroup title="Radio" name='radioo' onChange={this.handleChange}>
              <Radio value='A' onChange={this.handleChange}/>
              <Radio value='B' onChange={this.handleChange}/>
              <Radio value='C' onChange={this.handleChange}/>
            </RadioGroup>
          </Group>
          <Group>
          <Switch name='aaa1' title="Switch One" onChange={this.handleChange}/>
          <Switch name='aaa2' title="Switch Two" onChange={this.handleChange}/>
          <Switch name='aaa3' title="Switch Three" onChange={this.handleChange}/>
          <Switch name='aaa4' title="Switch 4" onChange={this.handleChange}/>
          <CheckboxGroup name='Checkbox ahoy' title="Switch 4" onChange={this.handleChange}>
            <Checkbox value='A' onChange={this.handleChange}/>
            <Checkbox value='B' onChange={this.handleChange}/>
            <Checkbox value='C' onChange={this.handleChange}/>
            <Checkbox value='D' onChange={this.handleChange}/>
            <Checkbox value='E' onChange={this.handleChange}/>
            <Checkbox value='F' onChange={this.handleChange}/>
          </CheckboxGroup>
        </Group>
        </SettingsPanel>
			</div>
    )
  }
}

export default Settings;