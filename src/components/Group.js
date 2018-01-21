import React, { Component } from 'react';
import propTypes from 'prop-types';
import md5 from 'md5';
import { observer } from 'mobx-react';

const styles = {};

@observer
class Group extends Component {
  static displayName = "GROUP";

  constructor() {
    super();
    this.state = {
      styles: styles
    };
  }

  render() {
    let Children = [];
    if (this.props.children && this.props.children.forEach) {
      this.props.children.forEach((c, i) => {
        const child = React.cloneElement(c, {
          store: this.props.store,
          key: md5(`group${i}`)
        });
        Children.push(child);
      });
    } else if (this.props.children) {
      const child = React.cloneElement(this.props.children, {
        store: this.props.store
      });
      Children.push(child);
    }
    return (
      <div className='uk-card uk-card-default uk-card-body uk-width-1-1'>
        {Children.length ? Children.map(Child => Child) : null}
      </div>
    );
  }
}

export default Group;
