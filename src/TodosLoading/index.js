import React from 'react';
import './TodosLoading.css'

function TodosLoading(){

    return(
        <div className="loader">
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
    </div>
    </div>
    );
  }

  export {TodosLoading};