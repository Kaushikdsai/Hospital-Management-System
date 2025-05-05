import React, { useState } from 'react';
import './Admin.css'

function Admin({ submittedData,setSubmittedData }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    date: '',
    time: '',
    reason: '',
    doctorName: 'Dr. Smith',  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      name: '',
      age: '',
      gender: '',
      contact: '',
      date: '',
      time: '',
      reason: '',
      doctorName: 'Dr. Smith',
    });
  };
  
  const generateTimeSlots = () => {
    const slots = [];
    let currTime = new Date();
    currTime.setHours(10,0,0,0);
    const endTime = new Date();
    endTime.setHours(22,30,0,0);
    while(currTime<=endTime){
      slots.push(new Date(currTime));
      currTime.setMinutes(currTime.getMinutes()+30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const getSlotColor = (time) => {
    if(!Array.isArray(submittedData)){
      return 'green';
    }
    const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    return submittedData.some((data) => data.time === formattedTime) ? "red" : "green";
  }

  return (
    <div className='admin-container'>
      <h1>APPOINTMENT SLOTS</h1>
      <div className='time-slot-container'>
        {timeSlots.map((slot,index) => {
          return (
            <div 
            key={index}
            className={`time-slot ${getSlotColor(slot)}`}>
              {slot.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})}
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <h2>ENTER DETAILS</h2>
        <div>
          <label>Enter Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Age:</label>
          <input name="age" onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Gender:</label>
          <input name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Contact No.:</label>
          <input name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Date:</label>
          <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Time:</label>
          <input name="time" type="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Reason for Visit:</label>
          <select name="reason" value={formData.reason} onChange={handleChange} required>
            <option value="">Select a reason</option>
            <option value="Fever">Fever</option>
            <option value="Allergy">Allergy</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
