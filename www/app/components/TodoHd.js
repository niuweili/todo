import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoActions from "../actions/todoActions.js";

class TodoHd extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input type="text" ref="kuang"/>
				<button onClick={()=>{this.props.todoActions.add(this.refs.kuang.value);this.refs.kuang.value=""}}>添加</button>
			</div>
		);
	}
}

export default connect(
	null ,
	dispatch => ({
		todoActions : bindActionCreators(todoActions , dispatch)
	})
)(TodoHd);