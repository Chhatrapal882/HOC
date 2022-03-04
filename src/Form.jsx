import React from 'react'
import Button from './Button'

function Form({onClick}) {
    const handleCLick = (e) =>{
        e.preventDefault()
        alert('new come')
    }
  return (
    <div>
        <h3>Signup</h3>
        <input type="text" />
        <br/>
        <input type="text" />
        <Button onClick={onClick} color="blue">Click</Button>
    </div>
  )
}

export default Form