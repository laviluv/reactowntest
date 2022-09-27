import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import AddTask from './components/AddTask';

// const name = 'Lavi'
// const x=true
// function title*() {
//   return(
//     <h5>Hi React:)</h5>
//   )
// }  

const App = () => {

  const [tasks, setTasks] = useState([ //state
    {
        id: 1,
        text: 'to do 1',
        day: 'Feb 5, 2022',
        reminder: 'true',
    },
    {
        id: 2,
        text: 'to do 2',
        day: 'Feb 5, 2022',
        reminder: 'true',
    },
    {
        id: 3,
        text: 'to do 3',
        day: 'Feb 5, 2022',
        reminder: 'false',
    },
])

const addTask = (task) => { //props
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task }
  setTasks([ ...tasks, newTask ]) //state
  console.log(task, id )
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  console.log('deleted: ', id)
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))  //state
  console.log(id)
}

  return (
    <div className="container" id='block'>
      <Header />   
      <AddTask 
      onAdd={addTask}  //onAdd the attribute is going to the component for linkage / hooking
      />
      {/* <Header title='Hello...' />  overrides the defaultProps set in Header component*/}
      {/* <h1>Hello {name}</h1>
    <p>{x ? 'Yes': 'No'}</p> */}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks added yet'}
    </div>
  );
}

export default App;
