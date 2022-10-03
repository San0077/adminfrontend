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
   
       const fil = cont.filter(d=>d.company !== e.company) 
       setcont(fil)
}
  return (
    <div  className="over">
    
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>skills</th>
            <th>location</th>
            <th>company</th>
            <th>Mode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {}
        {cont?cont.map(data=>
       
          <tr>
            <td>{data.special}</td>
            <td>{data.location}</td>
            <td>{data.company}</td>
            <td>{data.mode}</td>
            
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
