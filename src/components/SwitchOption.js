import React, { Component } from 'react';
import Switch from 'react-switch';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {};

@observer
class SwitchOption extends Component {
  static displayName = "SWITCH_OPTION";

  constructor() {
    super();
    this.state = {
      checked: false,
      header: ''
    };
  }

  componentDidMount() {
    if (this.props.initialValue !== null && this.props.initialValue !== undefined) this.setState({ checked: this.props.initialValue });
  }


  handleChange = (checked) => {
    if (this.props.store) this.props.store.settingsData[this.props.name] = checked;
    if (this.props.store && this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.setState({ checked: checked }, () => {
      if (this.props.hasOwnProperty("onChange") && !this.props.store) {
        this.props.onChange({ [this.props.name]: checked });
      }
    });
  };

  render() {

    const title = this.props.title ? this.props.title : null;
    const description = this.props.description ? this.props.description : null;
    const titleHorizontal = typeof this.props.titleHorizontal === 'boolean' ? this.props.titleHorizontal : null;
    if (titleHorizontal) {
      return (
        <div>
          <dl className="uk-description-list uk-description-list-divider">
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              id="switch-option"
            /> <span style={{ verticalAlign: 'top' }}>{title}</span>
            <dd>
              {description}
            </dd>
          </dl>
          <hr/>
        </div>
      )
    }

    return (
      <div>
        <dl className="uk-description-list uk-description-list-divider">
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
        <hr/>
      </div>
    )
  }
}

SwitchOption.propTypes = {
  onChange: propTypes.func,
  title: propTypes.string,
  description: propTypes.string,
  name: propTypes.string.isRequired,
  titleHorizontal: propTypes.bool,
  initialValue: propTypes.bool
};

export default SwitchOption;
