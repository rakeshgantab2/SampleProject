import React from 'react'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div style={{backgroundColor:"EEEEEE",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10px"}}>
        <div>
            <h1>About</h1>
        </div>
        <div style={{height:"auto",width:"800px",margin:"25px auto",padding:"15px",backgroundColor:"white"}}>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
             layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
             'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
              now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
              their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
              (injected humour and the like).
            </p>
        </div>
        <Link to="/"><button style={{width:"120px"}}>back to home</button></Link>
    </div>
  )
}

export default About