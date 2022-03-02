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
  dragStart,
  dragEnter,
  dragOver,
  dragEnd,
}) => {
  return (
    <>
      <FormEditFields
        index={index}
        fields={fields}
        setFields={setFields}
        field={field}
        dragStart={dragStart}
        dragEnter={dragEnter}
        dragOver={dragOver}
        dragEnd={dragEnd}
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
  dragStart: PropTypes.func,
  dragEnter: PropTypes.func,
  dragOver: PropTypes.func,
  dragEnd: PropTypes.func,
};

export default Fields;
