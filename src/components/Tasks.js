import Task from "./Task"


// const tasks = [
//     {
//         id: 1,
//         text: 'to do 1',
//         day: 'Feb 5, 2022',
//         reminder: 'true',
//     },
//     {
//         id: 2,
//         text: 'to do 2',
//         day: 'Feb 5, 2022',
//         reminder: 'true',
//     },
//     {
//         id: 3,
//         text: 'to do 3',
//         day: 'Feb 5, 2022',
//         reminder: 'false',
//     },
// ]

// const Tasks = () => {
//   return (
//     <>
// {tasks.map((task) => (
// <h3 key={task.id}>{task.text}</h3>
//     ))}
//     </>
//   )
// }
// export default Tasks



const Tasks = ( { tasks, onDelete, onToggle }) =>
{
    return (
        <>
            {tasks.map((task, index) => (
                // <h3 key={task.id}>{task.text}</h3>
                
                   // {/* <h3 key={task.id}>{task.text}</h3> */}
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                   // {/* <p>{task.day}</p> */}
            ))}
        </>
    )
}

export default Tasks

