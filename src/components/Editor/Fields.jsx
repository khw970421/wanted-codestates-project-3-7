import React from 'react';
import AccordingToType from './AccordingToType';
import FormEditFields from './FormEditFields';
import PropTypes from 'prop-types';
import Wysiwyg from './Wysiwyg';

const Fields = ({ field, index, fields, setFields, formDrag }) => {
  return (
    <>
      <FormEditFields
        index={index}
        fields={fields}
        setFields={setFields}
        type={field.type}
        formDrag={formDrag}
      />
      <AccordingToType
        field={field}
        index={index}
        fields={fields}
        setFields={setFields}
        type={field.type}
      />
      <Wysiwyg />
    </>
  );
};

Fields.propTypes = {
  field: PropTypes.object,
  index: PropTypes.number,
  fields: PropTypes.array,
  setFields: PropTypes.func,
  formDrag: PropTypes.func,
};

export default Fields;
