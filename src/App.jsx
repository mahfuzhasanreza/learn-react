import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person() {
  const age = 20;
  return <h3>My name is Mahfuz. My age is {age}</h3>
}

function Student() {
  return (
    <div>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

export default App
