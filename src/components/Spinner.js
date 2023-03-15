import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
      <div className = "text-center m-5">
        <img style={{width:"100px", height:"auto"}} src={loading} alt="ding"/>
        
      </div>
    )
  
}

