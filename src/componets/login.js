import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign&log.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [invalid, setinvalid] = useState("");
  //const { login, setlogin } = useContext(MyContext);

  const navigate = useNavigate();

  const loginInto = () => {
    if (email, password !== "") {
      const data = {
        email,
        password,
      };
      fetch("http://localhost:4000/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data => data.json()).then(data => {
        if (data.msg == "invalid") {
          setinvalid("Invaild Inputs");
        } else {

          localStorage.setItem("token", data.token);
         
          navigate("/inpiration");

        }
      });
    }
  };

  return (
    <>
      <div>
        <img className="img" src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas="></img>
        <div className="pic">

          <p class="text-center font-weight-bold">Login</p>
          <p class="text-center font-weight-bold">{invalid?"invalid data":""}</p>
          <TextField id="outlined-basic" onChange={e => setemail(e.target.value)} className="inputs" label="Email" style={{ width: 200 }} variant="outlined" /><br></br>
          <TextField id="outlined-basic" onChange={e => setpassword(e.target.value)} className="inputs" label="Password" style={{ width: 200 }} type="password" variant="filled" /><br></br>
          <Button variant="contained" onClick={() => loginInto()} className="inputs" style={{ width: 200 }}>Login</Button>

        </div>
      </div>


    </>
  );
}