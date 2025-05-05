import React from 'react';
import './Doctor.css';

const Doctor = ({ submittedData }) => {
    const feverPatients = submittedData.filter(patient => patient.reason === 'Fever');
    const allergyPatients = submittedData.filter(patient => patient.reason === 'Allergy');

    return (
        <div className="doctor-container">
            <h2>Doctor Dashboard</h2>
            <div className="doctor-box">
                <h3>Dr. John (Fever Specialist)</h3>
                {feverPatients.length > 0 ? (
                    <ul>
                        {feverPatients.map((patient, index) => (
                            <li key={index}>
                                <strong>Name:</strong> {patient.name}, <strong>Time:</strong> {patient.time}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No patients for fever.</p>
                )}
            </div>
            <div className="doctor-box">
                <h3>Dr. Smith (Allergy Specialist)</h3>
                {allergyPatients.length > 0 ? (
                    <ul>
                        {allergyPatients.map((patient, index) => (
                            <li key={index}>
                                <strong>Name:</strong> {patient.name}, <strong>Time:</strong> {patient.time}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No patients for allergy.</p>
                )}
            </div>
        </div>
    );
};

export default Doctor;
