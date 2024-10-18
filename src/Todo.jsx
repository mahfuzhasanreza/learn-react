// export default function Todo({ task, isDone }) {
//     return (
//         <h2>
//             <li>Tasks: {task}</li>
//         </h2>
//     )
// }


// conditional rendering - option 1
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work-on: {task}</li>
// }


// conditional rendering using ternary operator - option 2
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work-on'}: {task}</li>
//     )
// }


// // conditional rendering - option 3 : &&
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone && ': Done'} </li>
//     )
// }

// conditional rendering - option 4 : ||
export default function Todo({ task, isDone }) {
    return (
        <li>{task} {isDone || ': Pending'} </li>
    )
}