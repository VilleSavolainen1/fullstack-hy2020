import React from 'react';

const Course = ({courses}) => {
    return (
      <div>
        <h1>Web Development Curriculum</h1>
        <Header courses={courses} />
      </div>
    )
  }
  
  const Header = ({courses}) => {
    return (
      <div>
        <Part courses={courses} />
      </div>
    )
  }
  
  
  const Part = ({courses}) => {
  
    const sum = (obj) => {
    let arr = [];
    let num = [];
    for(let i in obj){
      arr.push(obj[i])
    }
    for(let x in arr[2]){
      num.push(arr[2][x].exercises)
    }
    return num.reduce((a, b) => {return a + b})
  }
  
    const course = courses.map(course => 
      <div key={course.name}>
        <h3><b>{course.name}</b></h3>
        <div>{course.parts.map(parts => 
        <li key={parts.name}>{parts.name} {parts.exercises}</li>
        )}
        <div key={course.name}>
          <br></br>
          <b>total of {sum(course)} exercises </b>
        </div>
        </div>
      </div>)
  
    return (
      <div>
           {course}
      </div>
    )
  }
 
  export default Course;