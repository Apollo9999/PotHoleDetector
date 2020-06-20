import React from 'react';
import './report.styles.css';


const Report=({handleChange})=>{

   
      
    return(
       <div className='upper-report'>
       <h2 className='report-header'>Enter details about Pot Hole</h2>
       <div className='report'>
        
        <form className='input-form'>
        <label className='input-label'>Name:</label>
        <input className='form-input' type='text' name='name' placeholder="Your Name" onChange={handleChange}/>
        <label className='input-label'>Location:</label>
        <input className='form-input' type='text' name='location' placeholder="Your location" onChange={handleChange}/>
        <label className='input-label'>Image:</label>
        <input className='form-input' type='text' name='image' placeholder="Your image"  onChange={handleChange}/>
        
        </form>

      </div>
        
       </div>
        
        
    )
    
  }


export default Report;