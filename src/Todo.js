import { ListItemText, Paper,List,ListItem, Divider, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import  useToggleState from './Hooks/useToggleState'
import EditTodoForm from './EditTodoForm'

const Todo=function Todo({task,completed,removeTodo,id,toggleTodo,editTodo}){
    const[isEditing, toggle]=useToggleState();
    //console.log(toggle,task,id,editTodo)
    return(
        <ListItem>
            {isEditing?(<EditTodoForm  id={id} task={task} toggle={toggle} editTodo={editTodo}/>):(
            <>
            <Checkbox checked={completed} tabIndex={-1} onClick={()=>toggleTodo(id)}/>
            <ListItemText style={{textDecoration:completed?"line-through":"none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={()=>removeTodo(id)}>
                    <DeleteIcon aria-label='Delete'/>
                </IconButton>
                <IconButton>
                    <EditIcon aria-label='Edit' onClick={toggle } />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            )}
        </ListItem>
    );
};
export default Todo;