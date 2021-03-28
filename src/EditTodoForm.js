import TextField from "@material-ui/core/TextField"
import useInputState from './Hooks/useInputState'
import React from 'react'
function EditTodoForm({editTodo,id,task,toggle}){
    const [value,handleChange,reset]=useInputState(task);
    return (
    <form onSubmit={(e)=>
    {
        e.preventDefault();
        editTodo(id,value);
        reset();
        toggle();
    }}>
        <TextField margin='normal' value={value} onChange={handleChange} fullWidth />
    </form>
    );
};
export default EditTodoForm;