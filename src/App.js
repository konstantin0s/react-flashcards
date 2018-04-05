import React, { Component } from 'react';
import Card from './Card/Card';
// import DrawButton from './DrawButton/DrawButton';
import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    cards: [
      {id: 1, eng: "English", ned: "Netherlands", hol: "Dutch"},
      {id: 2, eng: "English_2", ned: "Netherlands_2", hol: "Dutch_2"}
    ],
    currentCard: {

    }
  }
}

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

getRandomCard(currentCards){
  var card = currentCards[Math.floor(Math.random() * currentCards.length)];
  return(card);
}



  render() {
    return (
      <div className="App">
         <div className="cardRow">
        <Card eng={this.state.currentCard.eng}
              ned={this.state.currentCard.ned}
              hol={this.state.currentCard.hol}
              />
         </div>
           <div className="buttonRow">
            <DrawButton />
            </div>
      </div>
    );
  }
}

export default App;
