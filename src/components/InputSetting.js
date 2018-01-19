import React, { Component } from 'react';
import Switch from 'react-switch';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {};

@observer
class InputSetting extends Component {
  static displayName = "INPUT_SETTING";

  constructor() {
    super();
    this.state = {
      checked: false,
      header: '',
      value: ''
    };
  }

  componentDidMount() { }

  onBlur = () => {
    console.log(this.state.value)
    if (this.props.hasOwnProperty("onBlur")) {
      this.props.onBlur(this.state.value);
    }
  };

  handleChange = (e) => {
    if (this.props.store) this.props.store.settingsData[this.props.name] = e.target.value;
    if (this.props.store && this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.setState({ value: e.target.value }, () => {
      if (this.props.hasOwnProperty("onChange")) {
        this.props.onChange(e.target.value);
      }
    });
  };

  render() {
    const title = this.props.title ? this.props.title : null;
    const description = this.props.description ? this.props.description : null;

    return (
      <div>
        <dl className="uk-description-list uk-description-list-divider">
          <dt>{title}</dt>
          <input
            type='text'
            className='uk-input'
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.onBlur}
            id="settings-input"
          />
          <dd>
            {description}
          </dd>
          <hr/>
        </dl>
      </div>
    );
  }
}

InputSetting.propTypes = {
  onValue: propTypes.func,
  onSubmit: propTypes.func,
  title: propTypes.string,
  description: propTypes.string,
  name: propTypes.string.isRequired
};

export default InputSetting;
