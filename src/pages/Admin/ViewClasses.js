import React, { useEffect, useState, TextIn } from "react";
import {Table, Container, Button, Modal} from 'react-bootstrap'
import Navbar from "../../components/navbar";
import axios from "axios";
import qs from 'qs';

function ViewClasses({data}){

    const [classes, getClasses] = useState([])
    const [modal, showModal] = useState(false)
    const [teachers, setTeachers] = useState(data)
    const [edit, showEdit] = useState(false)

    // Hooks for form data
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState(0)
    const [contact, setContact] = useState("")

    const baseURL = "https://tcs-lms.herokuapp.com/admin/classes/"
    const addURL = "https://tcs-lms.herokuapp.com/admin/addclass"
    const delURL = "https://tcs-lms.herokuapp.com/admin/class/"

    const teacherURL = "https://tcs-lms.herokuapp.com/admin/teacher/"

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            getClasses(response.data.classes)
            console.log(response.data.classes)
            console.log(data)
        })
        axios.get(teacherURL).then((response) => {
          setTeachers(response.data.teachers)
          console.log(response.data.teachers)
        })
    }, [])
    
    const addClass = (e) => {
        let data = {
            name: name,
            age: age,
            gender: gender,
            email: email,
            salary: salary,
            contact: contact
        }
        console.log(data)
        e.preventDefault();
        axios.post(addURL, data).then((response) => {
            console.log(response.data)
        })
    }

    const delClass = (e) => {
        e.preventDefault()
        let id = e.target.parentElement.parentElement.getAttribute("value")
        let newURL = delURL+id
        axios.delete(newURL).then((response) => {
            alert(response.data.message)
        })
    }

    const editClass = (e) => {

    }

    const handleShow = () => showModal(true)
    const handleClose = () => showModal(false)
    const handleEdit = () => showEdit(true)
    const handleEditClose = () => showEdit(false)


    return(
        <Container fluid className="p-0">
            
        <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={addClass}>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={edit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={editClass}>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <br></br>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>

            <Navbar/>
            <Button className="commonBtn" onClick={handleShow}><h5>Add Class</h5></Button>
            <Table className="studentTable">
                <thead>
                    <th>Name</th>
                    <th>Teacher</th>
                    <th>Students</th>
                    {/* <th>Results</th>
                    <th>Material</th> */}
                </thead>
                <tbody>
                    {classes.map((i) => 
                        <tr>
                            <td>{i.name}</td>
                            <td>{teachers.find(x => x._id === i.tid) ? teachers.find(x => x._id === i.tid).name : "NOT ASSIGNED"}</td>
                            <td>{i.students.length}</td>
                            {/* <td>{i.results[0]}</td>
                            <td>{i.materials[0]}</td> */}
                            <td value={i._id}><Button className="commonBtn btn-danger w-20 h-20" onClick={handleEdit}><h5>Edit</h5></Button></td>
                            <td value={i._id}><Button className="commonBtn btn-danger w-20 h-20" onClick={(e) => delClass(e)}><h5>Delete Class</h5></Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewClasses