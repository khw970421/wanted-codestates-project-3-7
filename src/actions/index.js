export const CREATE_FORM = 'CREATE_FORM';
export const SUBMIT_FORM = 'SUMBIT_FORM';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// export const createForm = ({ title, fields }) => {
//   return {
//     type: CREATE_FORM,
//     payload: {
//       form: {
//         formId,
//         title,
//         fields,
//         submitData: [],
//       },
//     },
//   };
// };

export const submitForm = (formId, response) => {
  return {
    type: SUBMIT_FORM,
    payload: {
      formId,
      response,
    },
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
