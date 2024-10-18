import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Counter from './Counter'
import Users from './Users'

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

  function handleClick() {
    alert('btn clicked');
  }

  const handleClick2 = () => {
    alert('btn 2 clicked');
  }

  const addThree = (num) => {
    alert(num + 3);
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Users></Users>

      <Counter></Counter>

      <button onClick={handleClick}>Click Now</button>
      <button onClick={handleClick2}>Click Now 2</button>
      <button onClick={() => { alert('btn 3 clicked') }}>Click Now 3</button>
      {/* <button onClick={addThree(7)}>Add Three (Not Worked Properly, Problem)</button> */}
      <button onClick={() => addThree(7)}>Add Three</button>


      <br /> <br />
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
