import { ListItemText, Paper,List,ListItem, Divider, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"

const Todo=function Todo({task,completed}){
    return(
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1}/>
            <ListItemText style={{textDecoration:completed?"line-through":"none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon aria-label='Delete'/>
                </IconButton>
                <IconButton>
                    <EditIcon aria-label='Edit' />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
export default Todo;