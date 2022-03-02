import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Fields from '../components/Editor/Fields';

const basic = {
  id: '',
  type: 'text',
  required: false,
  label: '',
  placeholder: '',
  description: '',
};

const Editor = () => {
  const [fields, setFields] = useState([basic]);
  const [isDrag, setIsDrag] = useState(false);
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  // field 추가
  const addField = () => {
    const copy = [...fields, { ...basic }];
    setFields(copy);
  };

  const dragStart = (_, idx) => {
    dragItemIndex.current = idx;
    setIsDrag(true);
  };

  const dragEnter = (_, idx) => {
    const copyFields = [...fields];
    const item = copyFields[dragItemIndex.current];
    dragOverItemIndex.current = idx;

    copyFields.splice(dragItemIndex.current, 1);
    copyFields.splice(dragOverItemIndex.current, 0, item);
    dragItemIndex.current = dragOverItemIndex.current;
    dragOverItemIndex.current = null;

    setFields(copyFields);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  const dragEnd = () => {
    setIsDrag(false);
  };

  return (
    <Form>
      <ul>
        {fields.map((field, index) => {
          return (
            <li className={`field${index}`} key={index} draggable={isDrag}>
              <Fields
                field={field}
                fields={fields}
                index={index}
                setFields={setFields}
                dragStart={dragStart}
                dragEnter={dragEnter}
                dragOver={dragOver}
                dragEnd={dragEnd}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={addField} type="button">
        추가
      </button>
      <div>{JSON.stringify(fields)}</div>
    </Form>
  );
};

const Form = styled.form`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;

Editor.propTypes = {};

export default Editor;
