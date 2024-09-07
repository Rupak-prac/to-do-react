import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Grid } from "@mui/material";
import {v4 as uuid} from 'uuid';


export default function ToDoForm({addTd}){
    const [formData, setformData] = useState({id:'', text:'', complete:false})
    const change = (evt)=>{
        setformData((currData)=>{
            return {...currData, id:uuid(),  [evt.target.name]: evt.target.value}
        })
    }

    const sendTd = (evt)=>{
        if (evt.key === 'Enter'){
            if (formData.text !== ''){
                evt.preventDefault()
                addTd(formData)
                setformData({id:uuid(), text:'', complete:false})
            } else {
                alert('Empty todo is not allowed!!')
            }
            
        } 
    }

    return (
        <Grid container>
        <Grid item>
           <TextField id="filled-basic"  onChange={change} onKeyDown={sendTd} value={formData.text} name="text" label="add to-do, press enter" variant="filled" />
        </Grid>

        <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <IconButton onClick={sendTd} aria-label="add">
                <AddIcon />
            </IconButton>
        </Grid>
      </Grid>
        
    )
}
