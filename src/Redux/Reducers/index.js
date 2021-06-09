import {ADD_TASK,EDIT_TASK,EDIT_DONE} from '../Actions/ActionTypes'
const initialState={
        tasks:[{id:1,description:'Active Task',isDone:false},{id:2,description:'Completed Task',isDone:false}]
}
const reducer=(state=initialState,{type,payload})=>{
        switch (type) {
                case ADD_TASK:
                return {...state,tasks:[...state.tasks,payload]}
                case EDIT_TASK:
                return {...state,tasks:state.tasks.map((el,index)=>el.id===payload.id?{...el,description:payload.text}:el)}
                case EDIT_DONE:
                return {...state,tasks:state.tasks.map((el,index)=>el.id===payload.id?{...el,isDone:!el.isDone}:el)}
                default:
                return state
        }
}
export default reducer;