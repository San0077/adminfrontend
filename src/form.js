import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext,useState} from 'react';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button';
import {useFormik} from 'formik'
import * as yup from 'yup'
import swal from 'sweetalert';
import {MyContext} from './common.js'

const Forms = () => {
   
  const [days, setdays] = useState('');
  const {data,setdata} = useContext(MyContext)

  const handleChange = (event) => {
    setdays(event.target.value);
  };
  const obj =[];
const formValid =yup.object({
  names:yup.string().required("required").min(5),
  numbers:yup.number().required("required").min(4,(true)),
  email:yup.string().email().required("required"),
  phone: yup.number().required("required").positive().integer(),
  radio:yup.string().required("required"),
  age:yup.number().required("required"),

})
const form = useFormik({
    initialValues:{names:"",radio:"",numbers:"",phone:"",age:"",email:""},
    validationSchema:formValid,
    
    onSubmit:(values,{resetForm})=>{
        setdata(data=>[...data,values])
      
        fetch("http://localhost:4000/inpiration", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(data=>{
           swal("Good job!", "Your submited you form!", "success");
           resetForm({values:""})
          });
       
    }
})
  return (
    <form onSubmit={form.handleSubmit}>
    <div className="forms">
         
      <p className="alerts text-center">Alerts</p>
     
        
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="Names"
        variant="outlined"
        name="names"
         onChange={form.handleChange}
         onBlur={form.handleBlur}
         value={form.values.names}
        error={form.errors.names&&form.touched.names?true:false}
      />
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="values"
        variant="outlined"
        name="numbers"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
         value={form.values.numbers}
        error={form.errors.numbers&&form.touched.numbers?true:false}
      />
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
         value={form.values.email}
        error={form.errors.email&&form.touched.email?true:false}
      />
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="phone"
        variant="outlined"
        name="phone"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        value={form.values.phone}
       error={form.errors.phone&&form.touched.phone?true:false}
      />
      <InputLabel id="demo-select-small" >Days</InputLabel>
      <Select  style={{ width: "200px" }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={days}
        label="Age"
        name="age"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        
      error={form.errors.age&&form.touched.age?true:false}
      >
        <MenuItem name="age" value={form.values.age}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={40}>40</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={60}>60</MenuItem>
        <MenuItem value={70}>70</MenuItem>
        <MenuItem value={80}>80</MenuItem>
        <MenuItem value={90}>90</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      <FormLabel id="demo-row-radio-buttons-group-label">gt&lt</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel value="grater" name="radio" onChange={form.handleChange}
        onBlur={form.handleBlur} control={<Radio />} label="Greater" />

        <FormControlLabel value="lesser" name="radio" onChange={form.handleChange}
        onBlur={form.handleBlur} control={<Radio />} label="Lesser" />
       
      </RadioGroup>
      <div style={{fontWeight:"bold",color:"red"}}>{form.errors.radio&&form.touched.radio?"click any one":""}</div>
      <Button variant="contained" type="submit" >Submit</Button>
      
    </div>
    </form>
   
  );
};

export default Forms;
