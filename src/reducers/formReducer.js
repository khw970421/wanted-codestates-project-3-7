import { CREATE_FORM, SUBMIT_FORM } from '../actions';
import { initialState } from './initialState';

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FORM: {
      return {
        ...state,
        forms: [...state.forms, action.payload.form],
      };
    }
    case SUBMIT_FORM: {
      const forms = state.forms.map(item => {
        if (item.formId === action.payload.formId) {
          return {
            ...item,
            sumbitData: [...item.sumbitData, action.payload.response],
          };
        }
        return item;
      });

      return {
        ...state,
        forms,
      };
    }
    default:
      return state;
  }
};
