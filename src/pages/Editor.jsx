import React, { useState } from 'react';
import styled from 'styled-components';
import Fields from '../components/Editor/Fields';
import Wysiwyg from '../components/Editor/Wysiwyg';
const basic = {
  id: '',
  type: 'text',
  required: false,
  label: '',
  placeholder: '',
  description: '',
};

const Editor = () => {
  const [fields, setFields] = useState([
    {
      id: '',
      type: 'text',
      required: false,
      label: '',
      placeholder: '',
      description: '',
    },
  ]);

  // field 추가
  const addField = () => {
    let copy = fields.map(item => item);
    copy.push(basic);
    setFields(copy);
  };
  return (
    <Form>
      <ul>
        {fields.map((field, index) => {
          return (
            <li key={index}>
              <Fields
                field={field}
                index={index}
                fields={fields}
                setFields={setFields}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={addField} type="button">
        추가
      </button>
      <div>{JSON.stringify(fields)}</div>
      <Wysiwyg />
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
