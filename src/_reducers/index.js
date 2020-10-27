import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { vendor } from './vendor.reducer';
import { threatScenario } from './threatScenario.reducer';


const rootReducer = combineReducers({
  authentication,
  vendor,
  threatScenario
});

export default rootReducer;
