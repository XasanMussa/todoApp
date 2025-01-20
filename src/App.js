import { useState,useEffect } from 'react';
import AddTask from './components/addTask';
import Details from "./components/taskDetails"
import AddTaskForm from './components/AddTaskForm';
const initialData = [
  {
      "task": "Buy groceries",
      "title": "Grocery Shopping",
      "open": true,
      "archive": false,
      "closed": false
  },
  {
      "task": "Complete project report",
      "title": "Project Report Completion",
      "open": false,
      "archive": true,
      "closed": false
  },
  {
      "task": "Schedule doctor appointment",
      "title": "Doctor Appointment Scheduling",
      "open": false,
      "archive": false,
      "closed": true
  },
  {
      "task": "Plan vacation itinerary",
      "title": "Vacation Planning",
      "open": true,
      "archive": false,
      "closed": false
  },
  {
      "task": "Attend team meeting",
      "title": "Team Meeting Attendance",
      "open": false,
      "archive": false,
      "closed": true
  },
  {
      "task": "Renew gym membership",
      "title": "Gym Membership Renewal",
      "open": false,
      "archive": true,
      "closed": false
  },
  {
      "task": "Prepare for presentation",
      "title": "Presentation Preparation",
      "open": true,
      "archive": false,
      "closed": false
  },
  {
      "task": "Organize home office",
      "title": "Home Office Organization",
      "open": false,
      "archive": false,
      "closed": true
  },
  {
      "task": "Review budget for Q1",
      "title": "Q1 Budget Review",
      "open": false,
      "archive": true,
      "closed": false
  },
  {
      "task": "Submit tax documents",
      "title": "Tax Document Submission",
      "open": true,
      "archive": false,
      "closed": false
  }
]



function App(){
    const [darkmode,setDarkMode] = useState(false)
    const [data, setSubmitedData] = useState(initialData)
    const [title, setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [showAddTaskForm, setShowAddTaskForm] = useState(false)
    useEffect(() => {
        const root = document.getElementById("root");
        root.style.backgroundColor = darkmode ? "#001824" : "white";
      }, [darkmode]);
    function handleAddTask(){
      setShowAddTaskForm((showAddTaskForm)=>!showAddTaskForm)
      

    }
    function handleAddTaskFormSubmit(e) {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
          alert("Both title and description are required!");
          return;
        }
      
        const newTask = {
          task: description,
          title: title,
          open: true,
          closed: false,
          archive: false,
        };
      
        // Correctly update the data state
        setSubmitedData((prevData) => [...prevData, newTask]);
        console.log(data)
      
        // Clear the form fields after submission
        setTitle("");
        setDescription("");
      
        // Close the form
        handleAddTask();
      }

      
  return <div className={darkmode ? "darkApp" : "App"}>
    <AddTask darkmode={darkmode} setDarkMode={setDarkMode} title={title} description={description} setTitle={setTitle} setDescription={setDescription} handleAddTask={handleAddTask} showAddTaskForm={showAddTaskForm}/>
    {showAddTaskForm && <AddTaskForm handleAddTaskFormSubmit={handleAddTaskFormSubmit} title={title} description={description} setTitle={setTitle} setDescription={setDescription}/>}
    <Details darkmode={darkmode} data={data}/>
  </div>

}



export default App;

