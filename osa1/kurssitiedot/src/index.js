import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}{props.part1}{props.part2}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts}/>
      <Part part1={props.parts1}/>
      <Part part2={props.parts2}/> 
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = { 
    name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    { 
      name: 'Using props to pass data',
      exercises: 7
    },
    { 
      name: 'State of a component',
      exercises: 14
    }
  ]
}
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts[0].name + " " + course.parts[0].exercises}
       parts1={course.parts[1].name + " " + course.parts[1].exercises} 
       parts2={course.parts[2].name + " " + course.parts[2].exercises} 
       />
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))