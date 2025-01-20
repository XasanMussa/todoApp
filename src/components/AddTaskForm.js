function AddTaskForm({ title, description, setTitle, setDescription, handleAddTaskFormSubmit}) {
    
    return (
      <form className="addTaskForm" onSubmit={handleAddTaskFormSubmit}>
        
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"/>
        <button type="submit">+</button>
      </form>
    );
  }

  export default AddTaskForm;