import React from 'react'
import loading from './Spinner-2.gif'

const spinner = ()=>{
  
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default spinner

