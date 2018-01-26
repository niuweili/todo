import * as TodoActionTypes from "../constants/TodoActionTypes.js";
 

//拉取默认数据
export const loadData = () => async (dispatch) => {
	var todos = await fetch("/todos").then(data=>data.json());
	//将todos数组当做载荷发送出去
	dispatch({"type":TodoActionTypes.LOADDATA , todos});
}

//增加数据
export const add = (title) => async (dispatch) => {
	var newtodo = await fetch("/todos",{
		"method" : "POST" , 
		"headers" : {
			"Content-Type" : "application/json"
		},
		"body" : JSON.stringify({
			"title" : title,
			"done" : false
		})
	}).then(data=>data.json());

	dispatch({"type":TodoActionTypes.ADD , newtodo});
}