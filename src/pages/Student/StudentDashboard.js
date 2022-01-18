import React, { useState } from "react";




const StudentDashboard = () => {

  const student_id='61e461c24d2311059b8cb061';
  const [data, setData] = React.useState();

  
  const getData = ()=>{
    axios.get('http://localhost:3000/student/viewstudents/'+student_id)
    .then(res=>setData(JSON.parse(res.data)))
  }

  React.useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <h1>Student Dashboard</h1>
      <div className="card" >
        <img className="card-img-top" src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <p className="card-text">Age:{data.age}</p>
          <p className="card-text">gender:{data.gender}</p>
          <p className="card-text">Email:{data.email}</p>
          <p className="card-text">CGPA:{data.CGPA}</p>
          <a href="/student/viewquiz/1" className="btn btn-primary">
            ViewQuiz
          </a>
          <a href="/student/viewassignment/1" className="btn btn-primary">
            ViewAssignment
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
