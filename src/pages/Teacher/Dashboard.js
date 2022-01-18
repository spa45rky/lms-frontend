import React, { useState } from "react";
import axios from "axios";


const TeacherDashboard = () => {

    const [getData, setData] = useState({});

    const getTeacherData = async() => {
        const data = await axios.get("http://localhost:3000/Dashboard");
        // console.log(JSON.stringify(data));
        const json_data = JSON.parse(data);
        // console.log(json_data);
        setData(json_data);
    };

    React.useEffect(() => {
        getTeacherData();
    }, []);    

    return (
        <div>
            <h1>{getData.name}</h1>
            <h3>{getData.email}</h3>
            <h3>{getData.gender}</h3>
            <h3>{getData.age}</h3>
            <h3>{getData.contact}</h3>
            <h3>{getData.salary}</h3>
        </div>
    );

};

export default TeacherDashboard;
