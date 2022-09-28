import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
// const name = 'Lavi'
// const x=true
// function title*() {
//   return(
//     <h5>Hi React:)</h5>
//   )
// }

const App = () => {
  const [toggleAdd, setToggleAdd] = useState(false);

  const [tasks, setTasks] = useState([
    //state
    // {
    //     id: 1,
    //     text: 'to do 1',
    //     day: 'Feb 5, 2022',
    //     reminder: 'true',
    // },
    // {
    //     id: 2,
    //     text: 'to do 2',
    //     day: 'Feb 5, 2022',
    //     reminder: 'true',
    // },
    // {
    //     id: 3,
    //     text: 'to do 3',
    //     day: 'Feb 5, 2022',
    //     reminder: 'false',
    // },
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
   // fetchTasks();
   getTasks()
  }, []); //dependencie would go in here [user]

  const fetchTasks = async () => {
    const response = await fetch(`http://localhost:8000/tasks`); //backticks
    const data = await response.json();
    console.log(data);
    return data
  };

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:8000/tasks/${id}`); //backticks
    const data = await response.json();
    console.log(data);
    return data
  };

  const addTask = async (task) => {
    // //props
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]); //state
   // console.log("Added task >>> ", task, id);
    const response = await fetch("http://localhost:8000/tasks", {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(task)
    })
    const data = await response.json()
    setTasks([...tasks, data])
    console.log("Added task >>> ", data);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, { //backticks
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted: ", id);
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    console.log(taskToToggle, "<<< Task to toggle")

    const updatedTask = {  ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:8000/tasks/${id}`,{
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()

    setTasks(
      tasks.map((task) =>
      //   task.id === id ? { ...task, reminder: !task.reminder } : task
      // )
      task.id === id ? { ...task, reminder: data.reminder } : task
      )
    ); //state
    console.log(id, '<<< UPDATED');
  };

  return (
    <Router>
    <div className="container" id="block">
      <Header
        onAdd={() => setToggleAdd(!toggleAdd)}
        showAddButton={toggleAdd}
      />
      {toggleAdd && (
        <AddTask
          onAdd={addTask} //onAdd the attribute is going to the component for linkage / hooking
        />
      )}
      {/* <Header title='Hello...' />  overrides the defaultProps set in Header component*/}
      {/* <h1>Hello {name}</h1>
    <p>{x ? 'Yes': 'No'}</p> */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks added yet"
      )}
      <Link path="/about" component={About} />
      <Footer />
    </div>
    </Router>
  );
};

export default App;
