import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component{
   constructor(props){
     super(props);

     this.drawButton  = this.drawButton.bind(this);
   }

    drawButton(){
    this.props.drawButton();
    }

   render(props){
      return(
        <div className="buttonContainer">
           <button className="btn" onClick={this.drawButton}>Draw Cards</button>
        </div>
      )
   }
}
