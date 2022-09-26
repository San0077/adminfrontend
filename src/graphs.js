import React, { memo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  
  };
  
function Graphs({user}){
    

      
    return (
    <div style={{height:"200px" ,width:"1000px"}}>
        <Bar data={user} options={options} />
    </div>
     
    
           
        
    );
}



export default Graphs;