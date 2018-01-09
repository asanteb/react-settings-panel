import React, { Component } from 'react'
import Switch from 'react-switch'
import propTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

const styles = {};

@inject('store') @observer
class SwitchOption extends Component {
  static displayName = "SWITCH_OPTION";

  constructor() {
    super();
    this.state = {
      checked: false,
      header: '',
      titleHorizontal: false
    }
  }

  componentDidMount() {
    this.initialValue = this.props.initialValue ? this.props.initialValue : null;
    if (this.initialValue !== null) this.setState({ checked: this.initialValue });
    this.titleHorizontal = this.props.titleHorizontal ? this.props.titleHorizontal : null;
    if (this.titleHorizontal !== null) this.setState({ titleHorizontal: this.titleHorizontal });
  }


  handleChange = (checked) => {
    const onChange = this.props.onChange;
    if (!this.props.store.settingsData) this.props.store.settingsData = [];
    this.props.store.settingsData[this.props.name] = checked;
    if (this.props.onChange) onChange(this.props.store.settingsData);
    this.setState({ checked })
  };

  render() {
    const title = this.props.title ? this.props.title : null;
    const description = this.props.description ? this.props.description : null;
    const horizontalDivider = typeof this.props.hr === 'boolean' ? this.props.hr : null;
    const margin = typeof this.props.margin === 'boolean' ? this.props.margin : null;

    if (this.state.titleHorizontal) {
      return (
        <div>
          <dl className={`uk-description-list
          ${horizontalDivider ? 'uk-description-list-divider' : ''}
          ${!margin ? 'uk-margin-remove' : ''}`}>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              id="switch-option"
            /> <span style={{ verticalAlign: 'top' }}>{title}</span>
            <dd>
              {description}
            </dd>
          </dl>
          {horizontalDivider ? <hr/> : ''}
        </div>
      )
    }
    return (
      <div>
        <dl className={`uk-description-list
          ${horizontalDivider ? 'uk-description-list-divider' : ''}
          ${!margin ? 'uk-margin-remove' : ''}`}>
          <dt>{title}</dt>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            id="switch-option"
          />
          <dd>
            {description}
          </dd>
        </dl>
        {horizontalDivider ? <hr/> : ''}
      </div>
    )
  }
}

SwitchOption.propTypes = {
  onChange: propTypes.func,
  title: propTypes.string,
  description: propTypes.string,
  name: propTypes.string.isRequired,
  initialValue: propTypes.bool,
  titleHorizontal: propTypes.bool,
};

export default SwitchOption
