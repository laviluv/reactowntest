import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

// const name = 'Lavi'
// const x=true
// function title*() {
//   return(
//     <h5>Hi React:)</h5>
//   )
// }  
// Comment  
const App = () => {

  const [tasks, setTasks] = useState([
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


const deleteTask = (id) => {
  console.log('delete', id)
}

  return (
    <div className="container">
     
      <Header />   
      {/* <Header title='Hello...' />  overrides the defaultProps set in Header component*/}
      {/* <h1>Hello {name}</h1>
    <p>{x ? 'Yes': 'No'}</p> */}
    <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
