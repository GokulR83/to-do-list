import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import AddListForm from '../AddListForm/AddListForm';
import './ShowList.css'


const ShowList = () => {
    const[tasks,setTasks]=useState([]);
    const addItems=(FormTasks)=>{
        setTasks((currTasks)=>{
            return[...currTasks,{id:uuid(),tasks:FormTasks.addlist}]
        })
    }
    const handelDelete=(id)=>{
        setTasks((currTasks)=>{
            return currTasks.filter((i)=>i.id!==id);
        })
    }
  return (
    <div className="ShowList">
        <AddListForm addItems={addItems}/>
        <div className='container'>
            {
                tasks && <h1>Tasks</h1>
            }
            {
                !tasks ? <div></div> : tasks.map((i,idx)=>{
                    return(
                        <div key={i.id} className='All-items'>
                            <div className="items">
                            {idx+1}) {i.tasks}
                            </div>
                            <button className="deleteBtn"onClick={()=>handelDelete(i.id)}>delete</button>
                        </div>
                        
                    );
                })
            }</div>
    </div>
  )
}

export default ShowList;