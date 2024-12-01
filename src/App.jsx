import { useState } from 'react'


function Todo() {
  const [input, setInput] = useState(0)
  const [task,setTask] = useState([])

    function addTask(){
        const obj={id:Date.now(),task:input}
        setTask([...task , obj])
        setInput("")
    }

    function Edit(obj){
     
    }
    function Delete(id){
      setTask(task.filter(obj=>obj.id!=id))
    }

    // function trial() {

    //   if (isEditing) {
  
    //     setTask(
    //       Tasks.map((obj) =>
    //         obj.id === changedObjectId ? { ...obj, task: input } : obj
    //       )
    //     );
  
    //     setIsEditing(false);
    //     setChangedObjectId(null);
    //   } else {
    //     addTask();
    //   }
    // }
  
    // function addTask() {
    //   const Obj = { id: Date.now(), task: input, isChecked: false };
    //   setTask([...Tasks, Obj]);
    //   setInput("");
    // }
  
    // function Delete(id) {
    //   setTask(Tasks.filter((obj) => obj.id !== id));
    // }
  
    // function Edit(obj) {
    //   setInput(obj.task);
    //   setChangedObjectId(obj.id);
    //   setIsEditing(true);
    //   // flag = true;
    // }
  
    // function toggleCheckbox(id) {
    //   setTask(Tasks.map((obj) =>
    //     obj.id === id ? { ...obj, isChecked: !obj.isChecked } : obj
    //   ));
    // }
  
  return (
    <>
      <input type="text" placeholder="Enter Your Task" value={input} 
      onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {task.map((obj)=>{
          return  <li key={obj.id}>{obj.task}

           <button onClick={()=>Edit(obj)}>Edit</button>
           <button onClick={()=>Delete(obj.id)}>Delete</button>

          </li>
        })}
       
      </ul>
    </>
  )
}

export default Todo
