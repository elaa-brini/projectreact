
import React, { useState } from 'react'
import './Navbar.css'
import AddModal from './AddModal'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setnewmovie,newmovie,setpage,setsearch,addmovie}) => {
  const [showadd, setshowadd] = useState(0)
const navigate=useNavigate()
  return (
    <div className='nav'>
      <h1>MOVIES</h1>
      <ul>
      <li>Search:</li>
      <input type="text" onChange={(e)=>setsearch(e.target.value)}  />
        <li onClick={()=> navigate('/')} >Logout</li>
        <li onClick={()=>setshowadd(1)}>add movie</li>
        {showadd==1?<AddModal newmovie={newmovie}  addmovie={addmovie} setnewmovie={setnewmovie} setshowadd={setshowadd}/>:null}
      </ul>
    </div>
  )
}

export default Navbar
