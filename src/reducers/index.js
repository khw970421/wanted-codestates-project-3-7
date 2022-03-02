import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { handleModalReducer } from './modalReducer';

const rootReducer = combineReducers({
  form: formReducer,
  modal: handleModalReducer,
});

export default rootReducer;
