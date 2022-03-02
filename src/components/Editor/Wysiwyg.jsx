import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import PropTypes from 'prop-types';
import React from 'react';
// import { useState, useEffect } from 'react';
// import { EditorState } from 'draft-js';

const Wysiwyg = ({ index, fields, setFields, height = 100 }) => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // useEffect(() => {
  //   console.log(editorState);
  // }, [editorState]);
  const onEditorStateChange = () => {
    //Editor에 접근하는 경우 해당 querySelector를 이용해
    // <span data-offset-key="emi0t-0-0" style="font-weight: bold;"><span data-text="true">wefefe</span></span> 와 같은 css를 포함한 태그를 뽑아낸다.

    console.log(
      document.querySelectorAll('.public-DraftStyleDefault-block')[index]
        .innerHTML,
    );

    setFields(
      fields.map((list, i) => {
        if (list.type === 'agreement') {
          //이용약관일 경우
          if (index === i) {
            return {
              ...list,
              contents: document.querySelectorAll(
                '.public-DraftStyleDefault-block',
              )[index].innerHTML,
            };
          }
        } else {
          if (index === i) {
            return {
              ...list,
              description: document.querySelectorAll(
                '.public-DraftStyleDefault-block',
              )[index].innerHTML,
            };
          }
        }
        return list;
      }),
    );
  };
  return (
    <EditorContainer height={height}>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbar={{
          inline: { inDropdown: false },
        }}
        // editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </EditorContainer>
  );
};

Wysiwyg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  index: PropTypes.number,
  fields: PropTypes.array,
  setFields: PropTypes.func,
};

const EditorContainer = styled.div`
  .wrapper-class {
    width: 100%;
    height: ${props => props.height}px;
    margin-bottom: 4rem;
  }
  .rdw-inline-wrapper :nth-child(5) {
    display: none;
  }
  .rdw-inline-wrapper :nth-child(6) {
    display: none;
  }
  .rdw-inline-wrapper :nth-child(7) {
    display: none;
  }

  .rdw-option- .rdw-block-wrapper {
    display: none;
  }
  .rdw-fontsize-wrapper {
    display: none;
  }
  .rdw-dropdown-wrapper {
    display: none;
  }
  .rdw-fontfamily-wrapper {
    display: none;
  }
  .rdw-list-wrapper {
    display: none;
  }
  .rdw-text-align-wrapper {
    display: none;
  }

  .rdw-link-wrapper {
    display: none;
  }
  .rdw-embedded-wrapper {
    display: none;
  }
  .rdw-image-wrapper {
    display: none;
  }
  .rdw-remove-wrapper {
    display: none;
  }
  .rdw-image-wrapper {
    display: none;
  }
`;
export default Wysiwyg;
