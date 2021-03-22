import { ListItemText, Paper,List,ListItem, Divider } from "@material-ui/core";
import Todo from "./Todo";

function TodoList(props){
return(
<Paper>
    <List>
    {props.todos.map(todo=>(
        <>
        <Todo task={todo.task} key={todo.id} completed={todo.completed} />
        <Divider />
        </>
    ))}
    </List>
    
</Paper>

);
}
export default TodoList;