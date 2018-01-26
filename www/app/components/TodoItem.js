import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoActions from "../actions/todoActions.js";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input type="checkbox"/>
				<span>
					{this.props.item.title}
				</span>
				<button>删除</button>
			</div>
		);
	}
}

export default connect()(TodoItem);