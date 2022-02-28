import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordingToType = ({ type }) => {
  const inputRef = useRef();
  const [tags, setTags] = useState();

  // 태그 제거
  const removeTag = num => {
    const item = tags.slice();
    item.splice(num, 1);
    setTags(item);
  };

  // 태그 추가
  const addTag = e => {
    if (e.key === ',') {
      const item = tags.slice();
      item.push(inputRef.current.value);
      setTags(item);
    }
  };

  const resetInput = e => {
    if (e.key === ',') {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      {type == 'text' || type == 'phone' ? (
        <input type="text" />
      ) : (
        <TagBox>
          {/* tags */}
          {tags?.map((item, num) => {
            return (
              <TagBtn key={num}>
                <span>{item}</span>
                <button onClick={() => removeTag(num)} />
              </TagBtn>
            );
          })}
          {/* input */}
          <Input
            ref={inputRef}
            onKeyPress={addTag}
            onKeyUp={resetInput}
            placeholder="옵션 (각 아이템은 콤마(,)로 구분합니다.)"
            type="text"
          />
        </TagBox>
      )}
    </>
  );
};

// TagBox위치
const TagBox = styled.div`
  display: flex;
  height: 27px;
  padding: 4px;
  border: 1px solid #bbb;
  :focus-within {
    border: 1px solid black;
  }
`;

// 태그
const TagBtn = styled.div`
  display: flex;
  padding: 5px;
  border: 1px solid #68d987;
  margin-right: 3px;
  color: #68d987;
  font-weight: bold;
  white-space: nowrap;
  > button {
    position: relative;
    width: 20px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    :before,
    :after {
      position: absolute;
      top: 3px;
      left: 15px;
      width: 2px;
      height: 10px;
      border-radius: 2px;
      background-color: #275a35;
      content: '';
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  }
`;

// input
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 10px;
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 16px;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

AccordingToType.propTypes = {
  type: PropTypes.string.isRequired,
  tags: PropTypes.any,
  setTags: PropTypes.func,
};

export default AccordingToType;
