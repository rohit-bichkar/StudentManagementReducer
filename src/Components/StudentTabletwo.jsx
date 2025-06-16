import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const StudentTabletwo = ({students,editStudent,deleteStudent}) => {
   // const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const [division, setDivision] = useState('');

    const handleEdit = (index)=>{
    editStudent(index);
    // navigate('/')
    }

    const filteredStudents = students.filter(student=> 
        student.name.toLowerCase().includes(search.toLowerCase()) &&
        (division ? student.division === division : true)
    );
  return (
   <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: 1100 }}>
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="text-lg font-bold mb-4 text-center">Student Records</h2>
          <div className='d-flex gap-3 align-items-center mb-3'>
          <Link to='/'><button className='btn btn-primary mb-1'>Add Records</button></Link>
            <input className='form-control w-25' type='text' placeholder='Search By name' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <select className='form-select w-25' onChange={(e) => setDivision(e.target.value)}>
              <option value="">All Divisions</option>
              <option value="First Division">First Division</option>
              <option value="Second Division">Second Division</option>
              <option value="Third Division">Third Division</option>
            </select>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Marks 1</th>
                <th>Marks 2</th>
                <th>Marks 3</th>
                <th>Marks 4</th>
                <th>Marks 5</th>
                <th>Percentage</th>
                <th>Division</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.marks1}</td>
                  <td>{student.marks2}</td>
                  <td>{student.marks3}</td>
                  <td>{student.marks4}</td>
                  <td>{student.marks5}</td>
                  <td>{student.percentage}%</td>
                  <td>{student.division}</td>
                  <td>
                    <button
                      className="btn btn-warning text-white rounded p-1 mx-1"
                      onClick={()=>handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger text-white rounded p-1 mx-1"
                      onClick={()=>deleteStudent(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="10" className="text-center text-muted">No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentTabletwo
