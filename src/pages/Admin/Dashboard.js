import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container, Button, Row, Card} from 'react-bootstrap';
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

function Dashboard() {
    // init hooks for data from backend API endpoint
    const [classes, setClass] = useState([]);
    const [students, setStudent] = useState([]);
    const [teachers, setTeacher] = useState([]);

    const baseURL = "https://tcs-lms.herokuapp.com/admin/"

    // asynchronously get data on mounting on component
    useEffect( async () => {
        let dashData = await getData()
        console.log(dashData)
        setClass(dashData.classes)
        setStudent(dashData.students)
        setTeacher(dashData.teachers)
    }, [])

    // api call
    const getData = async () => {
        try {
            const response = await axios.get(baseURL);
            console.log(response.data.data)
            return response.data.data;
        } catch (e) {
            console.log(e)
        }
    }

    // UI for Admin dashboard
    return(
        <Container fluid className="p-0">
            <Navbar/>
            <Row className="initial-row">
                <Card style={{ width: '18rem', height: '25rem', margin: '50px' }}>
                <Card.Body>
                    <Card.Title>Students</Card.Title>
                    <Card.Text>
                        Number of students enrolled: {students ? students.length : 0}
                    </Card.Text>
                    <Button variant="primary"><Link to="/admin/viewStudents" style={{color: 'white'}}>Student Info</Link></Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '25rem', margin: '50px' }}>
                <Card.Body>
                    <Card.Title>Teachers</Card.Title>
                    <Card.Text>
                    Number of teachers employed: {teachers ? teachers.length : 0}
                    </Card.Text>
                    <Button variant="primary"><Link to="/admin/viewTeachers" style={{color: 'white'}}>Teacher Info</Link></Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '25rem', margin: '50px' }}>
                <Card.Body>
                    <Card.Title>Classes</Card.Title>
                    <Card.Text>
                    Number of Classes: {classes ? classes.length : 0}
                    </Card.Text>
                    <Button variant="primary"><Link to="/admin/viewClasses" style={{color: 'white'}} params={{data: teachers}}>Class Info</Link></Button>
                </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Dashboard;