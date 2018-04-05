import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
<div className="card-container">
  <div className="card">
     <div className="front">
         <div className="eng">English Word</div>
     </div>
     <div className="back">
       <div className="ned">Dutch</div>
       <div className="hol">Ned</div>
     </div>
  </div>
</div>
)

export default Card
