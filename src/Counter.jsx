import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleReduce = () => {
        setCount(count - 1);
    }
    
    return (
        <div style={{ border: '2px solid purple', padding: '10px', margin: '20px' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add Count</button>
            <button onClick={handleReduce}>Reduce Count</button>
        </div>
    )
}