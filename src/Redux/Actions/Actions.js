import {ADD_TASK,EDIT_TASK,EDIT_DONE} from './ActionTypes'
export const addTask=(payload)=>({
    type:ADD_TASK,
    payload
})
export const editTask=(id,text)=>({
    type:EDIT_TASK,
    payload:{id,text}
})
export const editDone=(id)=>({
    type:EDIT_DONE,
    payload:{id}
})
