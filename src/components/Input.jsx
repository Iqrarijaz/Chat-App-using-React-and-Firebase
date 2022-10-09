import React from 'react';
import image from "../imgs/add-image.png"
import attach from "../imgs/attachment.png"

export default function Input() {
  return (
    <div className='inputForm'>
      <input type="text" placeholder='Type something...'  />
      <div className="send">
       <img  src={attach} alt=""  />
       <input type="file" name="" id="file" style={{display:"none"}} />
       <label htmlFor="file">
        <img src={image} alt="" />
       </label>
       <button>Send</button>
      </div>
    </div>
  );
}
