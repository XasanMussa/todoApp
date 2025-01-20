import { useState, useEffect } from "react";
import { MdOutlineSendAndArchive } from "react-icons/md";

function Details({data,darkmode}){
    const [ogData,setOgData]=useState(data);
    useEffect(() => {
        setOgData(data); // Update when `data` changes
      }, [data]);
    const all = ogData.length;
    const open = ogData.filter((task)=>task.open && !task.archive).length
    const archive = ogData.filter((task)=>task.archive).length
    const closed = ogData.filter((task)=>task.closed && !task.archive).length
    

    const [toggle,setToggle] = useState(1)
    function handeToggle(arg){
        setToggle(arg)
    }
    return <div className="details">
        <div className="navigation">
        <span className={toggle === 1 ? "active" : ""} onClick={()=>handeToggle(1)}>All<span className="round">{all}</span></span>
        <span className={toggle === 2 ? "active" : ""} onClick={()=>handeToggle(2)}>Open<span className="round">{open}</span></span>
        <span className={toggle === 3 ? "active" : ""} onClick={()=>handeToggle(3)}>Closed<span className="round">{closed}</span></span>
        <span className={toggle === 4 ? "active" : ""} onClick={()=>handeToggle(4)}>Archive<span className="round">{archive}</span></span>
        </div>
        <Task data={ogData} onSetOgData={setOgData} toggle={toggle} key={new Date().now} darkmode={darkmode} />
        
    </div>
}

function Task({data,toggle,onSetOgData,darkmode}){
    const tasks= data;
    const [isHovered, setIsHoverd] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    function handleArchived(t){
        const updatedTasks = tasks.map((task)=>task.title===t.title ? {...task, archive:!task.archive} : task)
        // setTasks(updatedTasks)
        onSetOgData(updatedTasks)
    }
    function handleCheckBox(t,val){
        setIsOpen(val);
        const updatedTasks = tasks.map((task)=>task.title===t.title ? {...task, open:val}: task);
        onSetOgData(updatedTasks);

    }
    return <>
    {toggle ===1 && tasks.map((task)=>{
        return <div className={darkmode ? "darkTask": "task"}>
            <div>
            <p style={{fontWeight:"bold"}}>{task.title}</p>
            <p>{task.task}</p>
            </div>
            <div>
            <CheckBox task={task} onHandleCheckBox={handleCheckBox} isOpen={isOpen}/>
            <MdOutlineSendAndArchive color= {task.archive ? "blue": "grey"} onClick={()=>handleArchived(task)} style={{ width:"20px",height:"70px", cursor: isHovered ? "pointer" : "",}} onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)}/>
            </div>

            </div>
    })}
    {toggle ===2 && tasks.filter((task)=>task.open && !task.archive).map((task)=>{
        
        return <div className={darkmode ? "darkTask": "task"}>
            <div>
            <p style={{fontWeight:"bold"}}>{task.title}  </p>
            <p>{task.task}</p>
            </div>
            <div>
            <CheckBox task={task} onHandleCheckBox={handleCheckBox} isOpen={isOpen}/>
            <MdOutlineSendAndArchive onClick={()=>handleArchived(task)}  color= {task.archive ? "blue": "grey"} style={{width:"20px",height:"70px", cursor: isHovered ? "pointer" : ""}} onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)}/>
            </div>
            </div>
    })}
    {toggle ===3 && tasks.filter((task)=>task.closed && !task.archive).map((task)=>{
        return <div className={darkmode ? "darkTask": "task"}>
            <div>
            <p style={{fontWeight:"bold"}}>{task.title}</p>
            <p>{task.task}</p>
            </div>
          
            <div>
            <CheckBox task={task} onHandleCheckBox={handleCheckBox} isOpen={isOpen}/>
            <MdOutlineSendAndArchive onClick={()=>handleArchived(task)} color= {task.archive ? "blue": "grey"} style={{width:"20px",height:"70px", cursor: isHovered ? "pointer" : ""}} onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)}/>
            </div>
          
            </div>
          
    })}
    {toggle ===4 && tasks.filter((task)=>task.archive).map((task)=>{
        return <div className={darkmode ? "darkTask": "task"}>
            <div>
            <p style={{fontWeight:"bold"}}>{task.title}</p>
            <p>{task.task}</p>
            </div>
            <div>
            <CheckBox task={task} onHandleCheckBox={handleCheckBox} isOpen={isOpen}/>
            <MdOutlineSendAndArchive onClick={()=>handleArchived(task)} color= {task.archive ? "blue": "grey"} style={{width:"20px",height:"70px", cursor: isHovered ? "pointer" : ""}} onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)}/>
            </div>
            </div>
    })}
    </>

}

function CheckBox({task, onHandleCheckBox, isOpen}){
    return <input type="checkbox" value={isOpen}   onChange={(e)=>onHandleCheckBox(task.title,e.target.value)} className="checkbox"/>
}
export default Details;