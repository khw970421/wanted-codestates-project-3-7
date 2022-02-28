export const CREATE_FORM = 'CREATE_FORM';
export const SUBMIT_FORM = 'SUMBIT_FORM';

export const createForm = ({ title, fields }) => {
  return {
    type: CREATE_FORM,
    payload: {
      form: {
        formId,
        title,
        fields,
        submitData: [],
      },
    },
  };
};

export const submitForm = (formId, response) => {
  return {
    type: SUBMIT_FORM,
    payload: {
      formId,
      response,
    },
  };
};
