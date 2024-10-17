// export default function Todo({ task, isDone }) {
//     return (
//         <h2>
//             <li>Tasks: {task}</li>
//         </h2>
//     )
// }


// conditional rendering
export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>Work-on: {task}</li>
}