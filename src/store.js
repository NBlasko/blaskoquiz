import { createStore, compose } from 'redux';
import reducer from './reducers';

const initialState = {
/*  players: [
    { name: 'Nikola Blagojevic', id: 0, points: 5, iop: 0 },
    { name: 'Nevena Ivkovic', id: 1, points: 0, iop: 0 },
    { name: 'Goku Blagojevic', id: 2, points: 20, iop: 0 },
    { name: 'King Blagojevic', id: 3, points: 10, iop: 0 },
  ]*/
}

const store = createStore(reducer, initialState, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;