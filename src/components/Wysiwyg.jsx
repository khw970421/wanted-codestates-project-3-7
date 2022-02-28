import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';

const Wysiwyg = ({ width = 388, height = 30 }) => {
  const [state, setState] = useState('');
  const onEditorStateChange = editorState => {
    console.log(editorState);
  };
  return (
    <EditorContainer width={width} height={height}>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbar={{
          inline: { inDropdown: false },
        }}
      />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .wrapper-class {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin: 0 auto;
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
    diaply: none;
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
