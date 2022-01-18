import React, { useState } from "react";
import axios from "axios";

const ViewQuiz = (props) => {
  const [quizdata, setQuizData] = React.useState();
  const [answers,setAnswers]=React.useState([]);

  const quiz_number = 1;
  const sid='61e461c24d2311059b8cb061';
  
  const getQuizData = () => {
    //GET DATA
    axios.get('http://localhost:3000/student/viewquiz')
    .then((res)=>setQuizData(res.data))
    
  };

  const inputanswers=(value,index)=>{
    let ans_temp =answers.splice();
    ans_temp[index]=value;
    setAnswers(ans_temp);

  }

  const submitQuiz =()=>{
    axios.post('http://localhost:3000/student/attemptquiz',{
      sid:sid,
      answers:answers,
      marks:[],
      attempted:true,
      total:0,
    })
  }

  React.useEffect(  () => {
    getQuizData();
    
  }, []);

  return (
    <div>
      <h1> Quiz Number {quiz_number || 2}</h1>
      <h2>Quiz ID {quizdata._id}</h2>
      
      <div>
        {quizdata.questions.map((val,index) => (
          <>
            <h3>Q: {val}</h3>
            <div class="input-group mb-3 input-group-sm">
            <span class="input-group-text">Answer</span>
            <textarea type="text" class="form-control" placeholder="Answer" onChange={(v)=>inputanswers(v,index)}> </textarea>
            </div>
          </>
        ))}
        <br/>
        <br/>
        <br/>
        <input type="Submit" className="btn btn-success" onSubmit={()=>submitQuiz()}/>
      </div>
    </div>
  );
};

export default ViewQuiz;
