import React, { useEffect, useState, TextIn } from "react";
import {Table, Container, Button, Modal} from 'react-bootstrap'
import Navbar from "../../components/navbar";
import axios from "axios";
import qs from 'qs';

function ViewStudents(data){

    const [students, getStudents] = useState([])
    const [modal, showModal] = useState(false)

    // Hooks for form data
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")

    const baseURL = "https://tcs-lms.herokuapp.com/admin/student/"
    const addURL = "https://tcs-lms.herokuapp.com/admin/addstudent"
    const delURL = "https://tcs-lms.herokuapp.com/admin/student/"
    const config = {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            getStudents(response.data.students)
            console.log(response.data.students)
        })
    }, [])

    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         getStudents(response.data.students)
    //         console.log(response.data.students)
    //     })
    // }, [students])
    
    const addStudent = (e) => {
        let data = {
            name: name,
            age: age,
            gender: gender,
            email: email 
        }
        console.log(data)
        e.preventDefault();
        axios.post(addURL, data).then((response) => {
            console.log(response.data)
        })
    }

    const delStudent = (e) => {
        e.preventDefault()
        let id = e.target.parentElement.parentElement.getAttribute("value")
        let newURL = delURL+id
        axios.delete(newURL).then((response) => {
            alert(response.data.message)
        })
    }

    const handleShow = () => showModal(true)
    const handleClose = () => showModal(false)
    return(
        <Container fluid className="p-0">
            
        <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={addStudent}>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    Age:
                    <br></br>
                    <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    Gender:
                    <br></br>
                    <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    Email:
                    <br></br>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br></br>
                <input type="submit"/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>

            <Navbar/>
            <Button className="commonBtn" onClick={handleShow}><h5>Add Student</h5></Button>
            <Table className="studentTable">
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>CGPA</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {students.map((i) => 
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.CGPA}</td>
                            <td>{i.email}</td>
                            <td value={i._id}><Button className="commonBtn btn-danger w-20 h-20" onClick={(e) => delStudent(e)}><h5>Delete Student</h5></Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewStudents