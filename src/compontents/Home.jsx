import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  
  const navigate= useNavigate();

    return (
      <div>
       <h1>Home</h1>
<h3> Welcome to Quiz App</h3>

<br></br>
<h5> If you already have account with us then login else register first</h5>
       <div>
        <button class="btn btn-primary" onClick={()=>navigate("/login")} > Login </button>
      <div>
<br></br>
      <button class="btn btn-primary" onClick={()=>navigate("/register")} > Register </button>
      </div>
      </div>
      </div>

      
    );
  }
  
  export default Home;