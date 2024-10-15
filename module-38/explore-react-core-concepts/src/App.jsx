import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Programmer from './pro'

function App() {
  // const [count, setCount] = useState(0)
  const actors = ['Stave', 'Tony', 'Baner', 'Parkar'];
  const programmer = [
    { id: 1, name: 'Syd Abdul Hakim', age: '29' },
    { id: 2, name: 'Rayhan Howlader', age: '28' },
    { id: 3, name: 'L.Sorif', age: '30' },
    { id: 4, name: 'Remon js', age: '23' }
  ]

  return (
    <>

      <h1>Vite + React</h1>

      {
        programmer.map(programmer => <Programmer programmer={programmer}></Programmer>)
      }


      <Actor name={"Thor"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false} ></Todo> */}
      {/* <Device name="Laptop " price="50000"></Device>
      <Device name="Mobile" price="30000"></Device>
      <Device name="Smart-Watch" price="20000"></Device>
      <Person></Person>
      <Student grade="7" score="77"></Student>
      <Student grade="8" score="88"></Student>
      <Student grade="9" score="99"></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  // console.log(props);
  return <h2> This Device: {props.name} price: {props.price}</h2>
}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'Seber', age: 24 }
  return <h3>I am  {person.name} with age: {age + money}</h3>
}
const { grade, score } = { grade: '7', score: '99' };
function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>grade: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Programmer</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
