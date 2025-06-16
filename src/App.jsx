import { useReducer, useState } from 'react'

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { studentData } from './Data/data'
import studentReducer from './Reducer/StudentReducer'
import Dashboard from './Components/Dashboard'
import StudentTabletwo from './Components/StudentTabletwo'
import StudentForm from './Components/StudentForm'

function App() {
  const [students, dispatch] = useReducer(studentReducer,studentData)
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = (student)=>{
    if(editIndex !== null){
      dispatch({type:'EDIT', index:editIndex,payload:student});
      setEditIndex(null);

    }else{
      dispatch({type:'ADD', payload: student})
    }
  };

  const editStudent = (index)=>{
    setEditIndex(index);
  }

  const deleteStudent=(index)=>{
    dispatch({type:'DELETE', index})
  }

  return (
    <>
     <BrowserRouter>
      <Dashboard/>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div style={{ }}>
           <StudentForm
            addStudent={addStudent}
             editData={editIndex !== null ? students[editIndex] : null}
              editIndex={editIndex}
              cancelEdit={() => setEditIndex(null)}
            />
          </div>
          <div style={{  }}>
            <StudentTabletwo
              students={students}
              editStudent={editStudent}
              deleteStudent={deleteStudent}
            />
          </div>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
