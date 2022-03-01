import React from 'react';
import styled from 'styled-components';
import { BsArrowDownUp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const FormEditFieldsWrapper = styled.div`
  display:flex;
  button {
    border:0;
    display: flex;
    padding:7px;
    cursor:pointer;
    background-color:transparent;
    align-items: center;
    box-sizing: border-box;
    &:first-child {
      background-color:#fff;
    }
    &:last-child {
      background-color:#FF3355;
      color:white;
      font-size:1rem;
    }
  }
`

const Select = styled.select`
  font-size: 1rem;
  font-weight: 800;
`;
const LabelInput = styled.input`
  font-weight: 800;
`;

const Fieldset = styled.fieldset`
  display:flex;
  align-items: center;
  background-color: #eee; 
`

const FormEditFields = () => {

  const dragForm = (e) => {
    console.log(e.dataTransfer.setData('text', e.target.id));
  }

  return (
    <FormEditFieldsWrapper>
      <Select name="type">
        <option value="text">텍스트</option>
        <option value="phone">전화번호</option>
        <option value="address">주소</option>
        <option value="select">드롭다운</option>
        <option value="file">첨부파일</option>
        <option value="agreement">이용약관</option>
      </Select>
      <LabelInput type="text" />
      <Fieldset>
        <input type="checkbox" id="required" />
        <label htmlFor="required">필수</label>
      </Fieldset>
      <button type="button" id="drag" aria-label="드래그" draggable onDragStart={dragForm}><BsArrowDownUp /></button>
      <button type="button" aria-label="삭제"><IoClose /></button>
    </FormEditFieldsWrapper>
  );
};

export default FormEditFields;
