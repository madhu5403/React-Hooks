import {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList'
function TodoApp(){
    const initialTodos=[
        {id:1,task:"do something",completed:false},
        {id:1,task:"do nothing ",completed:true},
        {id:1,task:"do something useful",completed:false}
    ]
    const [todos, setTodos]=useState(initialTodos);
    return (
        <Paper style={{
            padding:0,
            margin:0,
            height:"100vh",
            backgroundColor:"#fafafa"
        }} elevation={0}
        >
            <AppBar color='primary' position='static' style={{height:"64px"}}>
                <Toolbar>
                    <Typography color='inherit' variant='h6'>Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos}></TodoList>

        </Paper>
    );
}
export default TodoApp;