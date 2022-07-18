import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId,setEditId]=useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now}`, todo }, ...todos])
      setTodo('')
    }
    if(editId){
      const editTodo=todos.find((bun)=>bun.id===editId)
      const updatedTodos=todos.map((dun)=>dun.id===editTodo.id?
        dun={id:dun.id,todo}:{id:dun.id,todo:dun.todo})
        setTodos(updatedTodos)
        setEditId(0)
        setTodo("")
        return;
    };
   
  }
  const handleDelete=(id)=>{
    const deleteTodo=todos.filter((to)=>to.id !==id)
    setTodos([...deleteTodo])
  }
  const handleEdit=(id)=>{
    const editTodo=todos.find((bunty)=>bunty.id === id);
    setTodo(editTodo.todo)
    setEditId(id)
  }
  return (
    <div className='app'>
      <div className="container">
        <h2>To Do List App</h2>
        <form action="" onSubmit={handleSubmit} className='todoForm'>
          <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>{editId ?"Edit":"Go"}</button>
        </form>
        <ul className='allTodos'>
          {todos.map((val) => (
            <li className='singleTodo'>
              <span className='textTodo' key={val.id}>{val.todo}</span>
              <button onClick={()=>handleDelete(val.id)} >Delete</button>
              <button onClick={()=>handleEdit(val.id)}>Edit</button>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default App
