import React, {useEffect, useState} from 'react'
import './component-styles.css'
import { baseUrl, createTask, deleteTask, updateTask } from '../utils'
import Delete from '../assets/delete.svg'

export default function TaskPanel(){
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  const fetchTasks = async () => {
    try{
      const response = await fetch(baseUrl)
      const data = await response.json()
      setTasks(data.data)
    }catch(e){console.error(e)}
  }

  useEffect(()=>{fetchTasks()},[])

  const handleDelete = async (taskId) => {
    const confirm = window.confirm('Are you sure you want to delete this task')
    if(!confirm) return
    await deleteTask(taskId)
    fetchTasks()
  }

  const toggleTaskCompletion = async (task) => {
    const updatedTask = {...task, completed: task.completed ? 0 : 1}
    await updateTask(updatedTask)
    fetchTasks()
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(!title.trim()) return
    const newTask = {title: title.trim(), completed:0}
    await createTask(newTask)
    setTitle('')
    fetchTasks()
  }

  return (
    <div className="task-panel glass-panel">
      <h2 className="panel-title">Your Tasks</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <input className="task-input" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add a new task..." />
        <button className="btn btn-primary" type="submit">Add Task</button>
      </form>

      <div className="panel-list">
        {tasks?.length ? tasks.map(task=> (
          <div className="task-item" key={task.id}>
            <label className="task-label">
              <input type="checkbox" checked={task.completed} onChange={()=>toggleTaskCompletion(task)} />
              <span className={`task-name ${task.completed? 'done':''}`}>{task.title}</span>
            </label>
            <button className="icon-btn" onClick={()=>handleDelete(task.id)} aria-label="Delete">
              <img src={Delete} alt="del"/>
            </button>
          </div>
        )) : <p className="empty-note">No tasks yet — add your first one.</p>}
      </div>
    </div>
  )
}
