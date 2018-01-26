import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoActions from "../actions/todoActions.js";

import TodoItem from "./TodoItem.js";

class TodoBd extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{
					this.props.todos.map(item=>{
						return <TodoItem item={item} key={item.id} />
					})
				}
			</div>
		);
	}
}

export default connect(
	({todoReducer : {todos}}) => ({
		todos
	})
)(TodoBd);