import React from 'react'

export default function Navbar() {
  return (
    <div style={{
      display: "flex", backgroundColor: "#ffffff",
      height: "50px",
      padding: "10px",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      // color: "#ffffff",
      }}><span className="logo">
      Chat App</span>
      <div className="user" style={{}}>
        <img src="" alt="" />
        <span>Daniyal</span>
        <button>
          logout
        </button>
      </div>
    </div>
  )
}
