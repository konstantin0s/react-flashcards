import React, { Component } from 'react';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import './App.css';
import { DB_CONFIG } from './Config/Firebase/db_config';

class App extends Component {

constructor(props){
  super(props);

  this.updateCard = this.updateCard.bind(this);

  this.state = {
    cards: [
      {id: 1, eng: "English", ned: "Netherlands", hol: "Dutch"},
      {id: 2, eng: "English_2", ned: "Netherlands_2", hol: "Dutch_2"},
      {id: 1, eng: "English3", ned: "Netherlands3", hol: "Dutch3"},
      {id: 2, eng: "English_4", ned: "Netherlands_4", hol: "Dutch_4"},
      {id: 1, eng: "English5", ned: "Netherlands5", hol: "Dutch5"},
      {id: 2, eng: "English_6", ned: "Netherlands_6", hol: "Dutch_6"},
      {id: 1, eng: "English7", ned: "Netherlands7", hol: "Dutch7"},
      {id: 2, eng: "English_8", ned: "Netherlands_8", hol: "Dutch_8"}
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

updateCard(){
  const currentCards = this.state.cards;
  this.setState({
    currentCard: this.getRandomCard(currentCards)
  })
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
            <DrawButton drawCard={this.updateCard} />
            </div>
      </div>
    );
  }
}

export default App;
