import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data));
  }, [])

  // const watches = [
  //   { id: 1, name: 'Apple', price: 200 },
  //   { id: 2, name: 'Samsung', price: 500 },
  //   { id: 3, name: 'Realme', price: 700 },
  // ]

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 8",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 5",
  //     price: 279
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense 2",
  //     price: 299
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: 399
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTS 4",
  //     price: 199
  //   }
  // ];


  return (
    <>
      <h1>ES6</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
