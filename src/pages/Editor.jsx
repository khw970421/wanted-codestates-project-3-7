import React, { useState } from 'react';
import AccordingToType from '../components/AccordingToType';
// import PropTypes from 'prop-types';
import FormEditFields from '../components/FormEditFields';
import styled from 'styled-components';

const Form = styled.form`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
  border-bottom:1px solid black;
`

const Editor = () => {
  const [tags, setTags] = useState([]);

  return (
    <main>
      <Form>
        <FormEditFields />
        <AccordingToType type="select" tags={tags} setTags={setTags} />
      </Form>
    </main>
  );
};

Editor.propTypes = {

};

export default Editor;