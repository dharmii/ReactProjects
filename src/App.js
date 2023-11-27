import { useState } from "react";
import './App.css';


function App(){
  const [newTodo,updatednewTodo]=useState("");
  const [todo,updatetodo]=useState([
  ])

  function getNextId(){
    return todo.length>0?Math.max(...todo.map(t=>t.id))+1:1
  }
  function addnewTodo(){
    if(newTodo===""){
      alert('please add some task')
    }else{
      let modifiedTasks=[
        ...todo,{
          id:getNextId(),
          task:newTodo
        }
      ]
      updatetodo(modifiedTasks);
      updatednewTodo("");
      
    }
  }
  function deleteTodo(id){
    let filteredTodos = todo.filter((t)=>{
      return t.id!==id;
    })
    updatetodo(filteredTodos);
  }
  return(
    <div className="container w-50 mt-4">
      <div className="input-group">
        <input type="text" value={newTodo} onChange={(e)=>{
          updatednewTodo(e.target.value);
        }} className="form-control" placeholder="Add Todos"></input>
        <button className="btn btn-primary" onClick={()=>{
          addnewTodo();
        }}>Add</button>
      </div>
      <ul className="list-group">
        {
          todo.map((t)=>{
            return(
              <li className="list-group-item" key={t.id}>
                <p>{t.task}</p>
                <button onClick={()=>{
                  deleteTodo(t.id);
                }}>❌</button>
              </li>
            )
          })
        }
      </ul>
    </div>
    
  )
}

export default App;