import Table from "react-bootstrap/Table";
import Button from '@mui/material/Button';
import {MyContext} from './common.js'
import React, { useContext,useState,useEffect} from 'react';

export function Tables() {
    const {data,setdata} = useContext(MyContext)
    const [cont, setcont] = useState(data);
useEffect(()=>{
  setcont(data)
},[data])
const deletee=(e)=>{
   
       const fil = cont.filter(d=>d.email !== e.email) 
       setcont(fil)
}
  return (
    <div  className="over">
    
      <Button variant="contained" style={{margin:"20px",marginBottom:"20px"}} >Submit</Button>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Values</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Days</th>
            <th>Ratio</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {}
        {cont?cont.map(data=>
       
          <tr>
            <td>{data.names}</td>
            <td>{data.numbers}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.radio}</td>
            <td>{data.age}</td>
            <td>     
            <i class="fa fa-trash fa-2x" onClick={()=>deletee(data)} aria-hidden="true"></i>
            </td>
          </tr>
        
        ):"No data found"}
        </tbody>
      </Table>
    </div>
  );
}
