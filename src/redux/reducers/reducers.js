import { TOGGLE_VISIBILITY, RETURN_CARD } from '../actions/actions';
import cardsJson from '../../cards.json';

const initialState = {
  cards: cardsJson['cards']
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_VISIBILITY:
      return {
        cards: [
          ...state.cards.slice(0, action.id),
          { ...state.cards[action.id], visible: !state.cards[action.id].visible },
          ...state.cards.slice(action.id + 1),
        ]
      }
    
    case RETURN_CARD:
      return {
        cards: [
          ...state.cards.slice(0, action.id),
          { ...state.cards[action.id], front: !state.cards[action.id].front },
          ...state.cards.slice(action.id + 1),
        ]
      }

    default:
      return state;
  };
}

export default rootReducer;