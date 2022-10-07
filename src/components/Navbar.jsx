import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar' style={{
      display: "flex",
      height: "50px",
      padding: "10px",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      // color: "#ffffff",
    }}><span className="logo" style={{
        fontWeight: "bold",
      }}>
      Chat App</span>
      <div className="user" style={{
        display: "flex",
        gap:"10px"
      }}>
        <img style={{
          backgroundColor: "#062C30",
          height: "24px",
          width: "24px",
          borderRadius: "50%",
          objectFit:"cover",
        }} src="https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-600w-1192615495.jpg" alt="" />
        <span>Daniyal</span>

        <button style={{
          backgroundColor: "#062C30",
          color: "#ffffff",
          fontSize: "10px",
          border: "none",
          padding:"5px",
        borderRadius:"5px"}}>
          logout
        </button>
      </div>
    </div>
  )
}
