import {  useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Register() {
  
  const navigate= useNavigate();

    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/employee/save", {
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registation Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Student Registation</h1>
    
    <form>
        <div class="form-group">
          <label>Student name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

        
       
      </form>

            <br></br>
            <h1> If you already have an account then login </h1>
      <button type="button" class="btn btn-primary mt-4" onClick={()=>navigate("/login")} > Login </button>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;