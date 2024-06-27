import React from 'react'
import './AddModal.css'
const AddModal = ({setnewmovie,setshowadd,newmovie,addmovie}) => {
  return (
    <div className='modal'>
        <div className='box add_modal'>
            <button onClick={()=>setshowadd(0)}>X</button>
            <input type='text' placeholder='name'  onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})}/>
            <input type='text' placeholder='image' onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})}/>
            <input type='text' placeholder='description'onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})} />
            <input type='text' placeholder='rate'onChange={(e)=>setnewmovie({...newmovie,rate:e.target.value})} />
            <input type='text' placeholder='genre'onChange={(e)=>setnewmovie({...newmovie,genre:e.target.value})} />

            <button onClick={()=>{setshowadd(0);addmovie()}}>add</button>



        </div>
      
    </div>
  )
}

export default AddModal
