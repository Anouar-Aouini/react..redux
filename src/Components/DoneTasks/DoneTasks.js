import React from 'react'
import {useSelector} from 'react-redux'

const DoneTasks = () => {
    const tasks = useSelector(state => state.tasks)
        return (
        <div className="DoneTasks" style={{display:'flex',justifyContent:'space-around'}}>
            <div className="Done">
            <h1>Active Tasks({tasks.filter(el=>el.isDone).length})</h1>
            <div>{tasks.filter(el=>el.isDone).map(el=><li>{el.description}</li>)}</div>
            </div>
            <div className="UnDone">
            <h1>Completed Tasks({tasks.filter(el=>!el.isDone).length})</h1>
            <div>{tasks.filter(el=>!el.isDone).map(el=><li>{el.description}</li>)}</div>
            </div>
        </div>
    )
}

export default DoneTasks