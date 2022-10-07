import React from 'react'

export default function Register() {
  return (
      <div className="formContainer" style={{
          backgroundColor: "#05595B",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
      }}>
          <div className="fromWrapper" style={{
              backgroundColor: "#ffffff",
              padding: "20px 60px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap:"10px"
          }} >
              <span className="logo" style={{
                  fontWeight: "bold",
              fontSize:"24px",color:"#062C30"}}> Chat App</span>
              <span className="title" style={{
               color:"#062C30",fontWeight: "bold",  fontSize:"18px"}}> Register</span>
              <form style={{
              display: "flex",
                  flexDirection: "column",
              gap:"15px"}}> 
                  <input style={{ padding: "15px", border: "none",borderBottom:"1.5px solid #05595B", width:"250px",}} type="text" placeholder='Name' />
                  <input style={{ padding: "15px", border: "none",borderBottom:"1.5px solid #05595B", width:"250px",}} type="email" placeholder='Email' />
                  <input style={{ padding: "15px", border: "none",borderBottom:"1.5px solid #05595B", width:"250px",}} type="password" placeholder='Password' />
                  <input  style={{ padding: "15px", border: "none",borderBottom:"1.5px solid #05595B", width:"250px",}}type="file" />
                  <button style={{
                      backgroundColor: "#E2D784", cursor: "pointer",
                  borderRadius:"10px", fontSize:"20px", padding:"10px",color:"#062C30",fontWeight:"bold"}}> Sign up</button>
              </form>
              <p> You do have an account? Sign In</p>
          </div>
    </div>
  )
}
