import React from 'react'
import logo1 from '../assets/Logo.jpeg'
import logo2 from '../assets/logo2.jpeg'

const Dashboard = () => {
  return (
     <>
        <div >
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{height:"80px"}}>
            <div className="container-fluid">
            <img src={logo1} style={{height:"60px", width:"60px"}}></img>
              <a className="navbar-brand mx-3 fs-3 fst-italic fw-bold" href="/">Student Management System</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active fs-4" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-light p- nav-link active fs-4" href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    
        <div className='container '>
            <div className='row'>
                 <div className='col md-6 mt-5'>
                    <h1 className='text-center mt-5'>Welcome to the Student Management System</h1>
                    <p className='text-center mt-3'>Manage student records efficiently and effectively.</p>
                    <div className='text-center mt-4'>
                        <a href="/" className='btn btn-primary mx-2'>Add Student Record</a>
                        <a href="/students" className='btn btn-secondary mx-2'>View Students List</a>
                        </div>
                 </div>
                 <div className='col md-6'>
                    <img src={logo2} alt="Dashboard" className='img-fluid mt-5' style={{maxWidth: '100%', height: 'auto'}} />
                 </div>
    
            </div>
    
        </div>
        </>
  )
}

export default Dashboard
