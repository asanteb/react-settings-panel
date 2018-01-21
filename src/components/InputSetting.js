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

  componentDidMount() {
    // this.initProps()
  }


  handleChange = (e) => {
    if (this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.props.store.settingsData[this.props.name] = e.target.value;
    this.setState({ value: e.target.value });
  };

  render() {
    const title = this.props.title ? this.props.title : null;
    const description = this.props.description ? this.props.description : null;
    const width = typeof this.props.width === 'string' && this.props.width.includes('uk-width') ? this.props.width : "";
    return (
      <div>
        <dl className="uk-description-list uk-description-list-divider">
          <dt>{this.props.title}</dt>
          <input
            type='text'
            className={`uk-input ${width}`}
            value={this.state.value}
            onChange={this.handleChange}
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
  name: propTypes.string.isRequired,
  width: propTypes.string
};

export default InputSetting;
