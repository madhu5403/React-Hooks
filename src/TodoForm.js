import { Paper, TextField } from "@material-ui/core";
import useInputState from "./Hooks/useInputState";

function TodoForm({addTodo}){
    const[value,handleChange,reset]=useInputState("");
    return(
        <Paper>
            <form onSubmit={e=>{
                e.preventDefault();
                addTodo(value);
                reset();
            }}> 
             <TextField value={value} onChange={handleChange}></TextField>
            </form>
        </Paper>
    );
}
export default TodoForm;