import React from 'react';
import Table from './table'
function App(){
  

const students=[
    {
        name: 'Hanh Pham',
        course: 'LFZ',
        grade: 50
    },
    {
        name: 'Danny Shittaker',
        course: 'LFZ',
        grade: 50
    },
    {
        name: 'Harrison Chen',
        course: 'LFZ',
        grade: 100
    },
    ];  
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}
    export default App
