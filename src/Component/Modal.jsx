
import React from 'react'
import'./Modal.css'
const Modal = ({el,setshow_modal}) => {
  return (
    <div className='modal'>
      <div className="box">
        <button onClick={()=>setshow_modal(false)}>X</button>
        <h1>{el.name}</h1>
        <p>{el.description}</p>
        <h4>{el.genre}</h4>
        <h4>{el.rate}</h4>


      </div>
    </div>
  )
}

export default Modal
