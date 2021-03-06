import { combineReducers } from 'redux';

import itemsReducer from './items';
import shoppingCartReducer from './shoppingCart';

/*
rootReducers is the output of combineReducers func, which takes an
object containing key-value pairs of all reducers we need to combine
*/
const rootReducers = combineReducers({
  items: itemsReducer,
  shoppingCart: shoppingCartReducer
})

export default rootReducers;
