import React, { useState } from "react";
import axios from "axios";

const SubmitAssign = (props) => {
  const [assignmentdata, setAssignmentData] = React.useState();
  const [answers,setAnswers]=React.useState([]);
  const [selectedFile,setSelectedFile] = React.useState();

  const quiz_number = 1;
  const sid='61e461c24d2311059b8cb061';
  const getAssignmentData = () => {
    //GET DATA
    axios.get('http://localhost:3000/student/viewassignment')
    .then((res)=>setAssignmentData(res.data))
    
  };

  const onFileChange=(e)=>{
    setSelectedFile(e.target.files[0])
  }
  const submitAssignment =(e)=>{
    let filedata =  new FormData();
    filedata.append('file',selectedFile)

    axios.post('http://localhost:3000/student/submitassignment',{
      sid:sid,
      file:filedata,
      attempted:true,
      total:0,
    })
  }

  React.useEffect(() => {
     getAssignmentData();
    
  }, []);

  return (
    <div>
      <h1> Assignment Number {quiz_number || 2}</h1>
      <h2>Assignment ID {assignmentdata._id}</h2>
      
      <div>
        {assignmentdata.questions.map((val,index) => (
          <>
            <h3>Q: {val}</h3>
            <div class="input-group mb-3 input-group-sm">
            </div>
          </>
        ))}
        <br/>
        <br/>
        <h3>Upload File</h3>
        <input type="file" id="myFile" name="filename" onChange={(e)=>onFileChange(e)}/>
        <br/>
        <br/>
        <input type="Submit" className="btn btn-success" onChange={()=>getBase64()} onSubmit={(e)=>submitAssignment(e)}/>
      </div>
    </div>
  );
};

export default SubmitAssign;
