import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as todoActions from "../actions/todoActions.js";

class TodoFt extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				共44项 已经做完3项
				<br/>
				<button>全看</button>
				<button>只看做完</button>
				<button>只看未做</button>
			</div>
		);
	}
}

export default connect()(TodoFt);