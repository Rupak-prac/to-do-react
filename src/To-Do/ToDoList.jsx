import { useState } from 'react';
import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

// const data = [
//     {id:'1', text:'cooking', complete:false},
//     {id:'2', text:'shop', complete:true},
//     {id:'3', text:'fishing', complete:false},
//     {id:'4', text:'sing', complete:true},
//     {id:'5', text:'Church', complete:true}
// ]

export default function ToDoList(){
    const [tdData, setTdData] = useState([])

    const adder = (formObj)=>{
        setTdData((currData)=>{
            return [...currData, formObj]
        })
        //console.log(tdData)
    }

    const toggler = (tdId)=>{
        setTdData((currData)=>{
            const finArr= currData.map((el)=> {
                if (el.id === tdId){
                    return {...el, complete:!el.complete }
                }
                return el
            })
            return finArr
        })
       
    }

    const remover = (tdId)=>{
        setTdData((currData)=>{
            const finArr = currData.filter((el)=> el.id !== tdId)
            return finArr
        })
    }
    
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'aqua', border:'1px solid black' }}>
        {tdData.map((eEl) => {
            const labelId = `checkbox-list-label-${eEl.id}`;
            return <ToDoItem 
                key={eEl.id} 
                eEl = {eEl} 
                handleToggle = {toggler} 
                removeTd = {remover} labelId={labelId}
                />
            
        })}
        <ToDoForm addTd = {adder}/>
        </List>
    )
}