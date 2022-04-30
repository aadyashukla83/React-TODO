import { useState } from "react"
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
import './css/style.css'
const App = () => {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState(
    [
        {
            id:1,
            text:'Doctors Appointment',
            day:'Friday',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at school',
            day:'Tuesday',
            reminder:true,
        },
        {
            id:3,
            text:'Food shopping',
            day:'Friday',
            reminder:false,
        }
    ]
)
//Toggle Reminder
const toggleReminder=(id)=>{
 setTasks(tasks.map((task)=>task.id=== id?{ ...task,reminder:!task.reminder}:task));

}
//Add TAsk
const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1
  console.log(id)
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
// Delete Task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !==id))

}
  return (
    <div className="container">
      <Header title="Task Manager" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ?(
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      ):(
        'No tasks to show'
        )}
    </div>
  )
}

export default App
