
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const[value, setValue] = useState({name:"", password:"", error:""})

  const validate = ()=>{
    if(value.name==="" || value.password===""){
      setValue({...value, error: "Both username and password are required."})
    } 
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>
        <label htmlFor="name">UserName:</label>
        <input type="text" onChange={(e)=>setValue({...value, name:e.target.value})}/>
        </p>
        <p>
        <label htmlFor="pass">Password:</label>
        <input type="password" onChange={(e)=>setValue({...value, password:e.target.value})}/>
        </p>
        {
          value.error && value.error!="" &&
            <p id="errorMessage">{value.error}</p>
        }
        
        <button type="submit" onClick={validate}>Login</button>
    </div>
  )
}

export default App
