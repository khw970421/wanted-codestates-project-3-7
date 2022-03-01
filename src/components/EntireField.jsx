import React, { useState } from 'react';
import FormEditFields from '../components/FormEditFields';
import AccordingToType from '../components/AccordingToType';
import styled from 'styled-components';

const Form = styled.form`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
`
const EntireField = () => {
  const [tags, setTags] = useState([]);


  return (
    <div >
      <Form>
        <FormEditFields />
        <AccordingToType type="select" tags={tags} setTags={setTags} />
      </Form>
    </div>
  );
};

export default EntireField;