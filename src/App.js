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
} from './index.js'
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
            <Switch title="Switch One" name={'a'} />
            <Switch title="Switch Two" name={'b'} />
            <Switch title="Switch Three" name={'c'} />
            <Input title="Input One" name={'d'} />
            <Selection title="Selection " name={'e'} >
              <Option value='a' />
              <Option value='b' />
              <Option value='c' />
            </Selection>
          </Group>
          <Group>
            <Switch title="Switch One" name='1' />
            <Switch title="Switch Three" name='2' />
            <TextArea title="TextArea" name='3' />
            <RadioGroup title="Radio" name='radioo' >
              <Radio value='A' />
              <Radio value='B' />
              <Radio value='C' />
            </RadioGroup>
          </Group>
          <Group>
          <Switch name='aaa1' title="Switch One" />
          <Switch name='aaa2' title="Switch Two" />
          <Switch name='aaa3' title="Switch Three" />
          <Switch name='aaa4' title="Switch 4" />
          <CheckboxGroup name='Checkbox ahoy' title="Switch 4" >
            <Checkbox value='A' />
            <Checkbox value='B' />
            <Checkbox value='C' />
            <Checkbox value='D' />
            <Checkbox value='E' />
            <Checkbox value='F' />
          </CheckboxGroup>
        </Group>
        </SettingsPanel>
			</div>
    )
  }
}

export default Settings;
