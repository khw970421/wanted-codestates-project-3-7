import React from 'react';
import AccordingToType from './AccordingToType';
import FormEditFields from './FormEditFields';
import PropTypes from 'prop-types';
import Wysiwyg from './Wysiwyg';

const Fields = ({ field, index, fields, setFields }) => {
  return (
    <div>
      <FormEditFields
        index={index}
        fields={fields}
        setFields={setFields}
        type={field.type}
      />
      <AccordingToType
        field={field}
        index={index}
        fields={fields}
        setFields={setFields}
        type={field.type}
      />
      <Wysiwyg />
    </div>
  );
};

Fields.propTypes = {
  field: PropTypes.object,
  index: PropTypes.number,
  fields: PropTypes.array,
  setFields: PropTypes.func,
};

export default Fields;
