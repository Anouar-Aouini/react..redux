import React from 'react'
import {useSelector} from 'react-redux'
import Task from '../Task/Task'
import {Col,Row} from 'react-bootstrap'
const  TaskList = () => {
    const tasks = useSelector(state => state.tasks)
    return (
        <div className="TaskList">
            <Row>
                <Col ><h1>Task</h1></Col>
                <Col><h1>Active/Completed</h1></Col>
            </Row>
            
            {tasks.map((el,key)=><Task key={el.id} task={el}/>)}
        </div>
    )
}
export default TaskList