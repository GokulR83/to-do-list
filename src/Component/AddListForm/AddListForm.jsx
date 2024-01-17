import React from 'react';
import { useState } from 'react';
import './AddListForm.css'

export const AddListForm = ({addItems}) => {
    const [formData,setFormData]=useState({addlist:""});
    function handleChange(evt){
        setFormData((oldData)=>{
            return{...oldData,[evt.target.name]:evt.target.value};
        })
    }
    const handleClick=(evt)=>{
        evt.preventDefault();
        setFormData({addlist:""})
        addItems(formData);
    }
  return (
    <div>
        <form action="" onSubmit={handleClick} className='form-table'>
            <label htmlFor="addlist">Enter Task :</label>
            <input type="text" 
            id='addlist' className='addList'
            name='addlist'
            value={formData.addlist}
            onChange={handleChange}
            />
            <button className="button">Add</button>
            
        </form>
    </div>
  )
}
export default AddListForm;
