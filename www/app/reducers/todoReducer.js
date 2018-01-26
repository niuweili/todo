import * as TodoActionTypes from "../constants/TodoActionTypes.js";

export default (state = {todos : []} , action) => {
	//拉取默认数据
	if(action.type == TodoActionTypes.LOADDATA){
		return {
			...state , 
			todos : action.todos
		}
	}else if(action.type == TodoActionTypes.ADD){
		return {
			...state , 
			todos : [
				...state.todos ,
				action.newtodo
			]
		}
	}
	return state;
}