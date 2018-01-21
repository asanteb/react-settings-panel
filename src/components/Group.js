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
    const width = typeof this.props.width === 'string' && this.props.width.includes('uk-width') ? this.props.width : 'uk-width-1-1';
    let Children = [];
    if (this.props.children.forEach) {
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
      <div className={`uk-card uk-card-default uk-card-body ${width}`}>
        {Children.length ? Children.map(Child => Child) : null}
      </div>
    );
  }
}

Group.propTypes = {
  width: propTypes.string
};

export default Group;
