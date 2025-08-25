import React, { useEffect, useState } from 'react';
import { getUser, postTask } from '../services/toDo.services';
import { addUser } from '../services/UserName.services';



const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUsername] = useState('Brian');
  useEffect(() => {
    addUser(userName)
    getUser(setTasks)
  },[]  
) 

console.log("Éste es mi estado", tasks)
  // //const addTask = () => {
  //   if (inputValue.trim () !== '') {
  //    //setTasks([...tasks, {id:crypto.randomUUID(), text: inputValue}]);
     
  //     setInputValue('');

  //   }
  // };
  const handleKeyDowm = (event) => {
    if (event.key === 'Enter') {
      console.log("click")
      event.preventDefault()
      postTask(userName, inputValue, setTasks);
      
    }
  };

  const deleteTask = (idToDelete) => {
    const updateTask = tasks.filter((task) =>  task.id !== idToDelete);
    setTasks(updateTask);
  };

  


return (

<div className="container"> 
  <form className="container d-flex flex-column justify-content-center align-items-center gap-2">        
    <div className="form col-6">
       <input type="text" className="form-control border-secondary" placeholder="Añadir nueva tarea"
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
       onKeyDown={handleKeyDowm}
       ></input>
    </div>
  </form>
 {tasks.length > 0 ? (
  <ul className="list-group">
    {tasks.map((task) => (
      <li
        key={task.id}
        className="list-group-item d-flex justify-content-between align-items-center py-2">
        <span className="fs-6">{task.label}</span>
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-sm text-danger opacity-0 hover-opacity-100 transition">                
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
      </li>
    ))}
     <footer className="d-inline p-2 text-bg-primary">
            Tienes {tasks.length} tareas pendientes.
      </footer>
  </ul>
  ) : (
  <div className="text-center text-muted py-4">
    <p className="fs-6">No hay tareas</p>
  </div>
)}
</div> 

 
)}

export default ToDoList;