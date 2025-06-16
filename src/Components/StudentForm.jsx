import React from 'react'
import { useState,useEffect } from 'react';

const StudentForm = ({addStudent, editData, cancelEdit,editIndex }) => {
     const [formData, setFormData] = useState({
    name: '',
    age: '',
    marks1: '',
    marks2: '',
    marks3: '',
    marks4: '',
    marks5: ''
  });

  const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

  useEffect(()=>{
     if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        name: '',
        age: '',
        marks1: '',
        marks2: '',
        marks3: '',
        marks4: '',
        marks5: ''
      });
    }
  },[editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    ["marks1", "marks2", "marks3", "marks4", "marks5"].forEach((mark) => {
      if (!formData[mark]) {
        errors[mark] = 'This field is required';
        valid = false;
      } else if (isNaN(formData[mark]) || formData[mark] < 0) {
        errors[mark] = 'Enter a valid positive number';
        valid = false;
      }
    });

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const percentage = (
        (parseFloat(formData.marks1) +
          parseFloat(formData.marks2) +
          parseFloat(formData.marks3) +
          parseFloat(formData.marks4) +
          parseFloat(formData.marks5)) / 5
      ).toFixed(2);

      const division = percentage >= 60 ? 'First Division' : "Second Division";
      addStudent({ ...formData, percentage, division });
      setFormData({
        name: '',
        age: '',
        marks1: '',
        marks2: '',
        marks3: '',
        marks4: '',
        marks5: ''
      });
      setErrors({});
      if (cancelEdit) cancelEdit()
    //   navigate('/students');
    }
  };

   <button
    type="button"
    onClick={() => {
      setFormData({
        name: '',
        age: '',
        marks1: '',
        marks2: '',
        marks3: '',
        marks4: '',
        marks5: ''
      });
      if (cancelEdit) cancelEdit(); 
    }}
    className="btn btn-secondary w-100"
  >
    Clear
  </button>

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-white" style={{ minWidth: 450 }}>
        <h2 className="text-lg font-bold mb-3 text-center">Enter Student Record:</h2>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
          {errors.name && <p className="text-danger small">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        {[1, 2, 3, 4, 5].map((num) => (
          <div className="mb-3" key={num}>
            <label>Marks {num}:</label>
            <input
              type="number"
              name={`marks${num}`}
              value={formData[`marks${num}`]}
              onChange={handleChange}
              required
              className="form-control"
            />
            {errors[`marks${num}`] && <p className="text-danger small">{errors[`marks${num}`]}</p>}
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100 mb-2">
          Submit
        </button>
       <button
            type="button"
             onClick={() => {
             setFormData({
                name: '',
                 age: '',
                 marks1: '',
                 marks2: '',
                 marks3: '',
                 marks4: '',
                 marks5: ''
            });
             if (cancelEdit) cancelEdit(); 
        }}
        className="btn btn-secondary w-100"
>
  Clear
</button>
      </form>
    </div>
  )
}

export default StudentForm
