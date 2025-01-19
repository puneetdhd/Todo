import {useState} from 'react';
//bell icon
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//repeat icon
import RepeatIcon from '@mui/icons-material/Repeat';
//Callendar
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';




export default TodoInput(){
    const [input ,setInput]=useState('');

    let handleSubmit=(event)=>{
        event.preventDefault();
        setInput(event.target.value);
    }

    return(
        <>
        <form>
        <div>
        <input>Add a Task</input>
        </div>
        </form>
        </>
    )
}