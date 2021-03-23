import { ListItemText, Paper,List,ListItem, Divider } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({todos,removeTodo,toggleTodo}){
return(
<Paper>
    <List>
    {todos.map(todo=>(
        <>
        <Todo task={todo.task} id={todo.id} key={todo.id} completed={todo.completed} removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        />
        <Divider />
        </>
    ))}
    </List>
    
</Paper>

);
}
export default TodoList;