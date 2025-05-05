import React from 'react';
import './Patient.css';

function Patient({ submittedData }) {
    return (
        <div className="patient-container">
            <h1>Patient Data</h1>
            {submittedData.length === 0 ? (
                <p className="no-data-message">No data available</p>
            ) : (
                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.contact}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.reason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Patient;
