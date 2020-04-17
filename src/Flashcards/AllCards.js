import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { removeNote } from '../redux/actions/actions';
import { toggleVisibility, rotateCard} from '../redux/actions/actions';

class AllCards extends Component {

  toggleVisibility = (index) => {
    this.props.toggleVisibility(index);
  }

  rotateCard = (index) => {
    this.props.rotateCard(index);
  }
  
  render() {
    const cardsItems = this.props.cards.map((card, index) =>
      <div className="bloc" key={index}>
        <div className={`flip-card ${card.visible ? '' : 'hide'} ${card.front ? '' : 'rotate'}`} onClick={() => this.rotateCard(index)} >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>{card.answer}</h3>
            </div>
            <div className="flip-card-back">
              <h3>{card.response}</h3>
            </div>
          </div>
        </div>
        <button onClick={() => this.toggleVisibility(index)}>{card.visible ? 'Cacher' : 'Afficher'}</button>
      </div>
    );

    return (
      <React.Fragment>
        <main>
          <h2>CARDS ({cardsItems.length})</h2>

          <ul>
            { cardsItems }
          </ul>
        </main>
      </React.Fragment>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

const mapDispatchToProprs = {
  toggleVisibility: toggleVisibility,
  rotateCard: rotateCard
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllCards);