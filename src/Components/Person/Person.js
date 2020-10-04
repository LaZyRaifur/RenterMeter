import React from 'react';

const Person = (props) => {

    const {name,floor,meter_number,phone_number} = props.person;
    const personStyle = {
            border: '1px solid #ccc',
            margin: '10px',
            padding: '10px'            
    }
    
    return (
        <div style={personStyle}>
        
        
    <p>First Name:{name}</p>
    <p><small>Last Name:{floor}</small> </p>
    <h5>Meter Number:{meter_number}</h5>
    <p><small>Phone Number: {phone_number}</small></p>
    
            
        </div>
    );
};

export default Person;