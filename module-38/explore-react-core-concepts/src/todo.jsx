// export default function Todo({ task, isDone }) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering 1


// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work one:{task}</li>
//     }
// }


// conditional rendering 2

// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished:{task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

// conditional rendering 3

// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
//     )
// }

// conditional rendering 4 : &&

// export default function Todo({ task, isDone }) {
//     return (
//         <li> {task} {isDone && ':Done'}</li>
//     )
// }
// conditional rendering 5 : ||

// export default function Todo({ task, isDone }) {
//     return (
//         <li> {task} {isDone || ':Do It'}</li>
//     )
// }

// conditional rendering 6

export default function Todo({ task, isDone }) {
    let lisItem;
    if (isDone) {
        lisItem = <li>Finish:{task}</li>
    }
    else {
        lisItem = <li>Work on:{task}</li>
    }
    return lisItem
}
