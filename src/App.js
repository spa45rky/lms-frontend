import './App.css';
import './styles/class.css';
import './styles/viewstudents.css';
import './styles/viewquiz.css'
import './styles/submitassignment.css'
import { useEffect, useState } from 'react';
import Dashboard from './pages/Admin/Dashboard';
import ViewStudents from './pages/Admin/ViewStudents';
import TeacherDashboard from './pages/Teacher/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ViewTeachers from './pages/Admin/ViewTeachers';
import ViewClasses from './pages/Admin/ViewClasses';


function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/admin/viewStudents" element={<ViewStudents/>}/>
      <Route path="/admin/viewTeachers" element={<ViewTeachers/>}/>
      <Route path="/admin/viewClasses" element={<ViewClasses/>}/>
    </Routes>
    </div>
  );
}

export default App;
