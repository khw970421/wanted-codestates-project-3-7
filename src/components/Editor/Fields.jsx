import React from 'react';
import AccordingToType from './AccordingToType';
import FormEditFields from './FormEditFields';
import PropTypes from 'prop-types';
import Wysiwyg from './Wysiwyg';

const Fields = ({
  field,
  index,
  fields,
  setFields,
  DragStart,
  DragEnter,
  DragOver,
  DragEnd,
}) => {
  return (
    <>
      <FormEditFields
        index={index}
        fields={fields}
        setFields={setFields}
        field={field}
        DragStart={DragStart}
        DragEnter={DragEnter}
        DragOver={DragOver}
        DragEnd={DragEnd}
      />

      <AccordingToType
        field={field}
        index={index}
        fields={fields}
        setFields={setFields}
      />

      <Wysiwyg
        index={index}
        fields={fields}
        setFields={setFields}
        field={field}
      />
    </>
  );
};

Fields.propTypes = {
  field: PropTypes.object,
  index: PropTypes.number,
  fields: PropTypes.array,
  setFields: PropTypes.func,
  DragStart: PropTypes.func,
  DragEnter: PropTypes.func,
  DragOver: PropTypes.func,
  DragEnd: PropTypes.func,
};

export default Fields;
