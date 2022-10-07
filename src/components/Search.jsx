import React from 'react';

export default function Search() {
  return (
    <div className='search' style={{ borderBottom:"1px solid #000000"}}>
      <div className="searchForm">
        <input className='input' type="text" placeholder='Search' />
      </div>
      <div className="userChat">
        <img
         src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000" alt="" />
        <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
