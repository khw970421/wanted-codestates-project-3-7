import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordingToType = ({ index, fields, setFields, field }) => {
  const inputRef = useRef();
  const [tags, setTags] = useState([]);

  // type이 select가아닐때
  // tags 초기화
  useEffect(() => {
    if (field.type !== 'select') {
      setTags([]);
    } else {
      setTags(field.option);
    }
  }, [fields]);

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

  //input 비워주기
  const resetInput = e => {
    if (e.key === ',') {
      inputRef.current.value = '';
    }
    setFields(
      fields.map((list, i) => {
        if (index === i) {
          return { ...list, option: tags };
        }
        return list;
      }),
    );
  };

  // TextInput 설정
  const handleChangeText = e => {
    setFields(
      fields.map((list, i) => {
        if (index === i) {
          return { ...list, placeholder: e.target.value };
        }
        return list;
      }),
    );
  };

  return (
    <>
      {field.type == 'text' || field.type == 'phone' ? (
        <input
          type="text"
          onChange={handleChangeText}
          value={field.placeholder}
        />
      ) : field.type === 'select' ? (
        <TagBox>
          {/* tags */}
          {tags?.map((item, num) => {
            return (
              <TagBtn key={num}>
                <span>{item}</span>
                <button type="button" onClick={() => removeTag(num)} />
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
      ) : null}
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
  index: PropTypes.number,
  fields: PropTypes.array,
  setFields: PropTypes.func,
  field: PropTypes.object,
};

export default AccordingToType;
