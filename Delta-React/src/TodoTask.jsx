import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
export default function TodoTask(){  
    let [tasks,setTasks]=useState([{task:"some task",id:uuidv4()}]); 
    let [newTodo,setNewTodd]=useState("");
    function addTask(){ 
        setTasks([...tasks,{task:newTodo,id:uuidv4()}]);
        setNewTodd("");
    }
    function newTask(event){ 
         setNewTodd(event.target.value);
    } 
    function deleteTask(id){  
     setTasks(tasks.filter((item)=>item.id!=id));
    } 
    function updateAll(){ 
        let newArr=tasks.map((todo)=>{ 
            return{ 
                task:todo.task.toUpperCase(),
            }
        });
        setTasks(newArr);
    }
    return( 
        <div>
            <input type="text" onChange={newTask} value={newTodo} placeholder="Enter here your task" /> 
            <button onClick={addTask} >Add Task</button> 
            <p>List of tasks</p>
            <ul> 
                {
                tasks.map((item)=>(
                 <li key="item.id">{item.task}
                 <button onClick={()=>deleteTask(item.id)} key="item.id">Delete</button>
                 </li>
                 ))
                }
            </ul>
            <button onClick={updateAll}>Update In UpperCase</button>
        </div>
    )
}