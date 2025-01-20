import Theme from "./theme";
function AddTask({title, description,setDescription,setTitle,handleAddTask,showAddTaskForm,darkmode,setDarkMode }){
    const date = new Date(); // Example date
    const formatDate = (date) => {
        const options = { weekday: 'long', day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
      };
    const todayDate = formatDate(date)
    
    return <div className="addtask">
        <div className="heading">
            <span style={{fontWeight:"bold", fontSize:"20px"}}>Today's Task</span> 
            <br/>
            <span  style={{fontSize:"12px", marginLeft:"10px", color:"grey"}}>{todayDate}</span>
        </div> 
        <button className="newTaskbtn" onClick={handleAddTask} >{showAddTaskForm ? "close " :` + New Task`}  </button>
        <Theme darkmode={darkmode} setDarkMode={setDarkMode}/>
          
    </div>
  }

  

  export default AddTask;



