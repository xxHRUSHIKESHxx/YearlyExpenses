import React from "react";
import "./ChartBar.css";

function ChartBar(props) {

  let barFullHeight='0%';

  if(props.maxValue >0){
      barFullHeight =Math.round((props.value / props.maxValue )* 100) +'%'
  }


    return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style ={{ height: barFullHeight}} ></div>
        </div>
        <div className="chart-bar__lable">{props.lable}</div>
     
    </div>
  );
} 
export default ChartBar;
