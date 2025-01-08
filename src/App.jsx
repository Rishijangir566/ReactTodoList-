import { useState } from 'react'


function Todo() {
  const [input, setInput] = useState("")
  const [task,setTask] = useState([])
   const [editingId , setEditingId]=useState(null)

    function addTask(){
      if(editingId){
          setTask(
            task.map((oneTask)=> 
              oneTask.id===editingId?{...task , taskToDo:input}:task
            )
          );
          setEditingId(null)
      }
       else{
         const obj={id:Date.now(),taskToDo:input}
          setTask([...task , obj])
          setInput("")
       } 
    }

    function Edit(id){
       const taskToEdit = task.find((obj)=>obj.id===id)
       setInput(taskToEdit.taskToDo)
       setEditingId(id)
    }

    function Delete(id){
      setTask(task.filter(obj=>obj.id!=id))
    }

   
  
  return (
    <>
      <input type="text" placeholder="Enter Your Task" value={input} 
      onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTask}>{editingId? "Edit Task":"Add Task"} </button>

      <ul>
        {task.map((obj)=>{
          return  <li key={obj.id}>{obj.taskToDo}

           <button onClick={()=>Delete(obj.id)}>Delete</button>
           <button onClick={()=>Edit(obj.id)}>Edit</button>

          </li>
        })}
       
      </ul>
    </>
  )
}

export default Todo
