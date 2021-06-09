import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Modal,Button,Container,Row,Col} from 'react-bootstrap'
import { editTask ,editDone} from '../../Redux/Actions/Actions'
const Task = ({task}) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const dispatch = useDispatch()
const [newText,setNewText]=useState(task.description);
const change=(e)=>{
    setNewText(e.target.value)
}
const handleEdit=()=>{
    dispatch(editTask(task.id,newText))
    handleClose()
}
const handleDone=()=>{
    dispatch(editDone(task.id))
}
    return (
        <div>
    <Container>
    <Row>
        <Col xs={8} md={4}><h3>{task.description}</h3></Col>
        <Col >
        <Button variant="primary" onClick={handleShow}>
        Edit
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" value={newText} onChange={change}></input></Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleEdit}>
            Save
        </Button>
        </Modal.Footer>
    </Modal>
        </Col>
        <Col > <input type="checkbox" onClick={handleDone} /></Col>
    </Row>
    </Container>
        </div>
    )
}
export default Task
