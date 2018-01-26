import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoActions from "../actions/todoActions.js";

import TodoHd from "../components/TodoHd.js";
import TodoBd from "../components/TodoBd.js";
import TodoFt from "../components/TodoFt.js";

class App extends React.Component {
	constructor(props) {
		super(props);

		//请求默认数据
		props.todoActions.loadData();
	}

	render() {
		return (
			<div>
				<TodoHd></TodoHd>
				<TodoBd></TodoBd>
				<TodoFt></TodoFt>
			</div>
		);
	}
}

export default connect(
	null ,
	(dispatch) => ({
		todoActions : bindActionCreators(todoActions , dispatch)
	})
)(App);