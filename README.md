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

React-Settings-Panel needs React and Mobx dependencies

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
            <Input name='myTextField' title='InputField' initialValue={'this text is displayed at start'} hr={false} />
        ```
        **Possible props:**
        
        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `intialValue` String that will be shown in the component when its loaded
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)
        * `width` Width the component will have (using UIKit classes: e.g. `uk-width-1-3`, default: `uk-width-1-1`)
         
    - #### InputNumber
        InputNumber component adds a number field to your panel. It doesn't require a parent and can be a solo component
        ```html
            <InputNumber name='myNumberField' title='InputNumberField'/>
        ```

        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `intialValue` Number that will be shown in the component when its loaded
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)
        * `width` Width the component will have (using UIKit classes: e.g. `uk-width-1-3`, default: `uk-width-1-1`)
        * `min` minimum value for the input number field
        * `max` max possible value for the input number field
        * `step` steps to increase / decrease the number when clicking the small arrows

    - #### TextArea
        TextArea component adds a Text Area box to your panel. It doesn't require a parent and can be a solo component
        ```html
            <TextArea name='myTextArea' title='Text Area One' width={'uk-width-2-3'} />
        ```
        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `intialValue` String that will be shown in the component when its loaded
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)
        * `width` Width the component will have (using UIKit classes: e.g. `uk-width-1-3`, default: `uk-width-1-1`)

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

        **Possible props:**

        * `width` Width the component will have (using UIKit classes: e.g. `uk-width-1-3`, default: `uk-width-1-1`)

    - #### Switch
        Switch component adds a clickable and mobile-touch enabled switch to your settings. It doesn't require a parent and can be a solo component.
        ```html
            <Switch name='mySwitch' title='Switch One'/>
        ```

        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `intialValue` determines the state of the switch component when loaded
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)
        * `titleHorizontal` Boolean that will place the title on the right side of the switch if true (default: `false`)

    - #### CheckboxGroup
        CheckboxGroup component adds a checkbox button to your settings. Wrapps the <Checkbox> components.
        ```html
            <CheckboxGroup name='myCheckbox' title='Checkbox One'>
                <Checkbox value='A' initialvalue={true} />
                <Checkbox value='B' />
                <Checkbox value='C' />
             </CheckboxGroup>
        ```

        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)

    - #### Checkbox
        Checkbox component that has to be wrapped in the parent <CheckboxGroup> for it to work. Value prop is both used for display name and key value name in data.
        ```html
            <CheckboxGroup name='myCheckbox' title='Checkbox One'>
                <Checkbox value='A' initialvalue={true} />
                <Checkbox value='B' />
                <Checkbox value='C' />
             </CheckboxGroup>
        ```

        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `value` determines if the checkbox is checked
        * `intialValue` Boolean that decides if the checbox is checked from the beginning (default: `false`)

    - #### Selection
        Selection is a parent component that acts as a dropdown. Dropdown requires Option components for values to select from. This is similar to Checkbox and Radio groups.
        ```html
            <Selection title="Selection" name='mySelection' >
                <Option value='a' />
                <Option value='b' />
                <Option value='c' />
            </Selection>
        ```

        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)
        * `width` Width the component will have (using UIKit classes: e.g. `uk-width-1-3`, default: `uk-width-1-1`)

    - #### Option
        Option is a child component that resembles an option of a dropdown. It requires to be wrapped in an Selection component. This is similar to Checkbox and Radio groups.
        ```html
            <Selection title="Selection" name='mySelection' >
                <Option value='a' />
                <Option value='b' />
                <Option value='c' />
            </Selection>
        ```
        **Possible props:**

        * `value` *(required)* value of the option that will be available in the dropdown

    - #### RadioGroup
        Radio component adds a radio button to your settings. Wrappes <Radio> components.
        ```html
            <RadioGroup title="Radio Group" name='myRadio'>
                <Radio value='A' />
                <Radio value='B' />
                <Radio value='C' />
            </RadioGroup>
        ```

        **Possible props:**

        * `name` *(required)* short descriptive name for the component, will be the identifier for the onChange event
        * `title` label for the component
        * `description` short description that will appear under the component
        * `hr` Boolean that decides if the horizontal divider is shown below the component (default: `true`)

    - #### Radio
        Radio requires to be wrapped in the parent <RadioGroup> for it to work. Value prop is both used for display name and key value name in data.
        ```html
            <RadioGroup title="Radio Group" name='myRadio'>
                <Radio value='A' />
                <Radio value='B' />
                <Radio value='C' />
            </RadioGroup>
        ```

        **Possible props:**

        * `value` determines if the radio is selected
        * `intialValue` Boolean that decides if the radio is selected from the beginning (default: `false`)

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
        **Possible props:**

        * `color` determines the background of the SettingsPanel (in hex code - e.g `#728ad8`)
        * `textColor` determines the text color within the SettingsPanel (in hex code - e.g `#ffffff`)
        * `onSubmit` triggered by clicking the Submit button
        * `noButtons` removes the buttons (clear & submit) completely (default: `false`)
        * `width` Width the component will have (using UIKit classes: e.g. `uk-width-1-3`, default: `uk-width-1-1`)
        * `groupsInRows` will put each Group component in a new row instead of a column (default: `false`)

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
 [@asanteb] 

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
   [webpack]: <https://webpack.js.org/>
   [React]: <https://reactjs.org/>
   [MobX]: <https://mobx.js.org>
