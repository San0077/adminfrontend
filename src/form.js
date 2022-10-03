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
  special:yup.string().required("required"),
  company:yup.string().required("required"),
  location: yup.string().required("required"),
  mode:yup.string().required("required"),
  img:yup.string().required("required"),
  

})
const form = useFormik({
    initialValues:{special:"",company:"",location:"",mode:"",img:""},
    validationSchema:formValid,
    
    onSubmit:(values,{resetForm})=>{
        setdata(data=>[...data,values])
       console.log(values)
        fetch("https://capstonebackend--q.herokuapp.com/jobs_post", {
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
         
      <p className="alerts text-center">jobs post</p>
     
        
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="special"
        variant="outlined"
        name="special"
         onChange={form.handleChange}
         onBlur={form.handleBlur}
         value={form.values.special}
        error={form.errors.special&&form.touched.special?true:false}
      />
       <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="image"
        variant="outlined"
        name="img"
         onChange={form.handleChange}
         onBlur={form.handleBlur}
         value={form.values.img}
        error={form.errors.img&&form.touched.img?true:false}
      />
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="company"
        variant="outlined"
        name="company"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
         value={form.values.company}
        error={form.errors.company&&form.touched.company?true:false}
      />
   
      <TextField
        style={{ width: "200px" }}
        id="outlined-basic"
        label="location"
        variant="outlined"
        name="location"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        value={form.values.location}
       error={form.errors.location&&form.touched.location?true:false}
      />
      <InputLabel id="demo-select-small" >mode</InputLabel>
      <Select  style={{ width: "200px" }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={days}
        label="mode"
        name="mode"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        
      error={form.errors.mode&&form.touched.mode?true:false}
      >
        <MenuItem name="mode" value={form.values.mode}>
          <em>None</em>
        </MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
       
       
      </Select>
      
      <Button variant="contained" type="submit" >Submit</Button>
      
    </div>
    </form>
   
  );
};

export default Forms;
