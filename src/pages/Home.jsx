import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
      <div className="home" style={{
          backgroundColor: "#05595B",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
      }}>
          <div className="container" style={{
              border: "1px solid #ffffff",
              borderRadius: "15px",
              height: "80%",
              width: "65%",
              overflow: "hidden",
          display:"flex"}}>
              <Sidebar />
              <Chat/>
          </div>
    </div>
  )
}
 