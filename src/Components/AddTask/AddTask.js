import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../../Redux/Actions/Actions'
import './AddTask.css'

const AddTask = () => {
const dispatch = useDispatch()
const [newDes,setNewDes]=useState("")
const change=(e)=>{
    setNewDes(e.target.value)
}
const empty=()=>setNewDes("")
const handleAdd=()=>{ if (newDes){
        dispatch(addTask({id:Math.random(),
        description:newDes,
        isDone:false,}))
}
    empty();
}
    return (
        <div>
            <div id="myDIV" className="header">
                <h2 style={{margin:5}}>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Enter your to do" onChange={change} value={newDes}/>
                <button onClick={handleAdd} className="addBtn">AddTask</button>
            </div>
        </div>
    )
}

export default AddTask
