# React Settings Panel

React Settings Pannel is a customizable React component that allows you to create your own settings panel.

# Features

  - Switches
  - Dropdown
  - Input
  - Text Area
  - Radio Buttons
  - Checkboxes

### Installation

React-Settings-Panel needs React and Mobx dependensies

Install the package and include it to your project

```sh
$ npm install react-settings-panel |or| $ yarn add react-settings-panel
```
```js
import { SettingsPanel } from 'react-settings-panel'
```

### Usage
- ##### Basic usage
    ```js
    import React, { Component } from 'react'
    import {
        Toolbar, Group, SettingsPanel, Switch, Checkbox, CheckboxGroup,
        Radio, RadioGroup, Option, Selection, Input, TextArea
    } from 'react-settings-panel'
    class Settings extends Component {
        handleSubmit = (data) => console.log
        render() {
            return(
                <SettingsPanel color={'#728ad8'} onSubmit={this.handleSubmit}>
                    <Toolbar />
                    <Group>
                      <Switch name='mySwitch' title='Switch One'/>
                      <Input name='myTextField' title='InputField'/>
                      <TextArea name='myTextArea' title='Text Area One'/>
                      <CheckboxGroup name='myCheckbox' title='Checkbox One'>
                        <Checkbox value='A' />
                        <Checkbox value='B' />
                        <Checkbox value='C' />
                      </CheckboxGroup>
                    </Group>
                    <Group>
                        <Selection title="Selection" name='mySelection' >
                            <Option value='a' />
                            <Option value='b' />
                            <Option value='c' />
                        </Selection>
                        <RadioGroup title="Radio Group" name='myRadio'>
                            <Radio value='A' />
                            <Radio value='B' />
                            <Radio value='C' />
                        </RadioGroup>
                    </Group>
                </SettingsPanel>
            )
        }
    }
    ```
    ##### Output:
    ![screenshot](https://i.gyazo.com/f27010126ac6182e64a52b51f264b5be.png)
    
- ##### Components
    - #### Input
        Input component adds a text field to your panel. It doesn't require a parent and can be a solo component
        ```html
            <Input name='myTextField' title='InputField'/>
        ```
        *props: [name, title]*
    - #### TextArea
        TextArea component adds a Text Area box to your panel. It doesn't require a parent and can be a solo component
        ```html
            <TextArea name='myTextArea' title='Text Area One'/>
        ```
        *props: [name, title]*
    - #### Group
        Group component acts as a parent to other settings components to seperate each group of settings to its own column. The colums are responsive as well.
        ```html
            <Group>
              <Switch name='mySwitch' title='Switch One'/>
              <Input name='myTextField' title='Input Field1'/>
              <TextArea name='myTextArea' title='Text Area One'/>
            </Group>
            <Group>
                <Input name='myTextField' title='Input Field2'/>
                <Selection title="Selection" name='mySelection' >
                    <Option value='a' />
                    <Option value='b' />
                    <Option value='c' />
                </Selection>
            </Group>
        ```
        Output:
        ![screenshot2](https://i.gyazo.com/fe8eac263db363ad1f7304e93b38268b.png)
        *props: [none]*
    - #### Switch
        Switch component adds a clickable and mobile-touch enabled switch to your settings. It doesn't require a parent and can be a solo component.
        ```html
            <Switch name='mySwitch' title='Switch One'/>
        ```

        *props: [name, title]*
    - #### Checkbox
        Checkbox component adds a checkbox button to your settings. Checkbox requires to be wrapped in the parent <CheckboxGroup> for it to work. Value prop is both used for display name and key value name in data.
        ```html
            <CheckboxGroup name='myCheckbox' title='Checkbox One'>
                <Checkbox value='A' />
                <Checkbox value='B' />
                <Checkbox value='C' />
             </CheckboxGroup>
        ```
        *props: [name, title, value]*
    - #### Selection
        Selection is a parent component that acts as a dropdown. Dropdown requires Option components for values to select from. This is similar to Checkbox and Radio groups.
        ```html
            <Selection title="Selection" name='mySelection' >
                <Option value='a' />
                <Option value='b' />
                <Option value='c' />
            </Selection>
        ```
        *props: [name, title, value]*
    - #### Radio
        Radio component adds a radio button to your settings. Radio requires to be wrapped in the parent <RadioGroup> for it to work. Value prop is both used for display name and key value name in data.
        ```html
            <RadioGroup title="Radio Group" name='myRadio'>
                <Radio value='A' />
                <Radio value='B' />
                <Radio value='C' />
            </RadioGroup>
        ```
        *props: [name, title, value]*
    - #### SettingsPanel
        SettingsPanel component is the main parent layout component to handle all the settings. You have unique props to change the color and handle the data you will get fromt he settings. **onSubmit** is a function call that passes data from settings when the submit button is clicked.
        ```html
            handleSubmit = (data) => console.log(data)
            ...
            <SettingsPanel
                color={'#728ad8'}
                onSubmit={this.handleSubmit}>
            >
                ...
            </SettingsPanel>
        ```
        *props: [color, onSubmit]*
    - #### Toolbar
        Toolbar is a component in working development. As of right now it displays a navbar on top with the title settings. In the future this will be customizable with added props, buttons and other functionalities.
        Output: ![screenshot3](https://i.gyazo.com/be915cb4c7ff514de47d57c4220ecb57.png)
---
### Note
> All components must be child of parent component <SettingsPanel>
> All components have an 'onChange' prop
> name prop acts as a unique key for your data. You should keep your names unique.

---

### Tech


* [React] - A JavaScript library for building user interfaces
* [UIKit] - A lightweight and modular front-end framework.
* [node.js] - evented I/O for the backend
* [webpack] - A bundler for javascript and friends.
* [MobX] - Simple, scalable state management.

React-Settings-Panel is open source with a [React-Settings-Panel]
 on GitHub.
 [@yamoshotto] 

### Development


Run:
```sh
$ npm start |or| $ yarn start
```

### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


   [React-Settings-Panel]: <https://github.com/asantebuil/react-settings-panel.git>
   [node.js]: <http://nodejs.org>
   [UIKit]: <https://getuikit.com/>
   [@yamoshotto]: <http://twitter.com/yamoshotto>
   [webpack]: <https://webpack.js.org/>
   [React]: <https://reactjs.org/>
   [MobX]: <https://mobx.js.org>