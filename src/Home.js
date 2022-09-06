import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
  return (
    <div>
        <div style={{height:"100px",backgroundColor:"#7FBCD2"}}>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-around",height:"100%"}}>
                <h1>SAMPLE</h1>
                <Link to="/about"><button style={{height:"40px",width:"120px",backgroundColor:"white",fontSize:"16px",color:"black",padding:"0px",margin:"0px"}}>About</button></Link>
            </div>
            <div class="wrapper">
                <h1>Hello Again!</h1>
                <p>Welcome back you'vebeen missed!</p>
                <form>
                <input type="text" placeholder="Enter username"/>
                <input type="password" placeholder="Password"/>
                <p class="recover">
                    <a href="#">Recover Password</a>
                </p>
                </form>
                <button>Sign in</button>
           </div>
        </div>
    </div>
  )
}

export default Home