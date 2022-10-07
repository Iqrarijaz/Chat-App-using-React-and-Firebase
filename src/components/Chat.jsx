import React from 'react'
import addUser from '../imgs/add-user.png'
import camera from '../imgs/cam.png'
import more from '../imgs/more.png'

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo" style={{ height: "50px"}}>
        <span>Jane</span>
        <div className="chatIcons">
          
          <img src={addUser} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  )
}
