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
    if (this.props.initialValue) this.setState({ value: this.props.initialValue });
  }

  onBlur = () => {
    if (this.props.hasOwnProperty("onBlur")) {
      this.props.onBlur(this.state.value);
    }
  };

  handleChange = (e) => {
    if (this.props.store) this.props.store.settingsData[this.props.name] = e.target.value;
    if (this.props.store && this.props.onChange) this.props.onChange(this.props.store.settingsData);
    this.setState({ value: e.target.value }, () => {
      if (this.props.hasOwnProperty("onChange") && !this.props.store) {
        this.props.onChange(e.target.value);
      }
    });
  };

  render() {
    const title = this.props.title ? this.props.title : null;
    const description = this.props.description ? this.props.description : null;
    const horizontalDivider = typeof this.props.hr === 'boolean' ? this.props.hr : true;
    const width = typeof this.props.width === 'string' && this.props.width.includes('uk-width') ? this.props.width : "";
    return (
      <div>
        <dl className={`uk-description-list ${horizontalDivider ? 'uk-description-list-divider' : ''}`}>
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
          {horizontalDivider ? <hr/> : ''}
        </dl>
      </div>
    );
  }
}

InputSetting.defaultProps = {
  title: null,
  description: null
};


InputSetting.propTypes = {
  onValue: propTypes.func,
  onSubmit: propTypes.func,
  title: propTypes.string,
  description: propTypes.string,
  name: propTypes.string.isRequired,
  hr: propTypes.bool,
  width: propTypes.string,
  initialValue: propTypes.string
};

export default InputSetting;
