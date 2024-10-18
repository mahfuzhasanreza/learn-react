import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib', 'Salman', 'Jashim'];
  const singers = [
    { id: 1, name: 'Mahfuzr', age: 67 },
    { id: 2, name: 'Eva', age: 38 },
    { id: 3, name: 'Shuvo', age: 30 }
  ];

  const books = [
    { id: 1, name: 'chemistry', price: 120 },
    { id: 2, name: 'math', price: 300 }
  ];

  return (
    <>
      <h1>Vite + React</h1>

      <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Master React"
        isDone={false}></Todo>

      <Device name="Laptop" price="70K"></Device>
      <Device name="Mobile" price="20K"></Device>
      <Person></Person>
      <Student score="55" grade="E"></Student>
      <Student score={90} grade="A"></Student>
      <Student></Student>
      <Student2></Student2>

      <Actor name={"SRK"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <BookStore books={books}></BookStore>
    </>
  )
}

function Device(props) {
  console.log(props);
  return <h2>Device name: {props.name}, Price: {props.price}</h2>
}

function Person() {
  const age = 20;
  return <h3>My name is Mahfuz. My age is {age}</h3>
}

function Student({ score = 0, grade = 'F' }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
    </div>
  )
}

function Student2() {
  const student2 = {
    margin: '20px',
    padding: '20px',
    border: '3px solid yellow',
    borderRadius: '20px'
  }
  return (
    <div style={student2}>
      <h3>This is a student2</h3>
      <p>Name of the Student2:</p>
      <p>Age:</p>
    </div>
  )
}

export default App
