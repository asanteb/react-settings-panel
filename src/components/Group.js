import React, { Component } from 'react';
import propTypes from 'prop-types'
import md5 from 'md5'
import { inject, observer } from 'mobx-react';

const styles = {};

@inject('store') @observer
class Group extends Component {
	static displayName = "GROUP";
	constructor() {
    super();
    this.state = {
      styles: styles
    }
  }
  render() {
		let Children = [];
		// console.log(JSON.stringify(this.props.children));
		if (this.props.children && this.props.children.forEach){
			this.props.children.forEach((c, i) => {
				const child = React.cloneElement(c, {
					store: this.props.store,
					key: md5(`group${i}`)
				});
				Children.push(child)
			})
		} else if (this.props.children) {
			const child = React.cloneElement(this.props.children , {
					store: this.props.store
				});
			Children.push(child)
		}
		console.log(`Group children length: ${Children.length}`);
    return (
			<div className='uk-card uk-card-default uk-card-body'>
					{Children.length ? Children.map(Child => Child) : null}
			</div>
    )
  }
}
export default Group;