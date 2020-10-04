import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';
import data from './Components/data/data.json';

function App() {
  const Icon_style ={display:'flex'}
  const [person,setPerson] = useState([]);

  useEffect(()=>{
        setPerson(data);
        
  },[])

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img style={Icon_style} src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            person.map(person=><Person person={person}></Person>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
