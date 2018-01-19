import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {};

@observer
class Toolbar extends Component {
  static displayName = "TOOLBAR";

  constructor() {
    super();
    this.state = {
      styles: styles
    };
  }

  render() {
    return (
      <div className='settings-toolbar'>
        <nav className="uk-navbar uk-navbar-container uk-margin">
          {/*<div className="uk-navbar-left">
						<a className="uk-navbar-toggle" href="#">
						<FontAwesome
							name='bars'
							size='2x'
							/>
						</a>
					</div> */}
          <div className="uk-navbar-center" style={{ color: '#888888' }}>
            <ul className="uk-navbar-nav">
              <li className='uk-text-large uk-text-bold'>Settings</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Toolbar;
