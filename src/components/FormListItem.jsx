import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HiOutlineDocumentText } from 'react-icons/hi';

const formListItem = () => {
  // const navigate = useNavigate();
  const deleteItem = () => {
    console.log('폼 삭제');
  };

  return (
    <SurveyList>
      <TitleWrap>
        <HiOutlineDocumentText color="#fff" size="50"></HiOutlineDocumentText>
        <SurveyTitle>제목입니다</SurveyTitle>
      </TitleWrap>
      <BtnWrap>
        <SurveyBtn
          onClick={() => {
            // navigate('/forms/:id/submission');
          }}
        >
          제출목록
        </SurveyBtn>
        <SurveyBtn onClick={deleteItem}>삭제</SurveyBtn>
      </BtnWrap>
    </SurveyList>
  );
};

const SurveyList = styled.div`
  width: 100%;
  height: 120px;
  /* border: 1px solid #333; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const TitleWrap = styled.div`
  height: 60px;
  background-color: #ddd;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
`;

const SurveyTitle = styled.div`
  margin-left: 16px;
  max-width: 320px;
  font-size: 18px;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SurveyBtn = styled.button`
  border: none;
  background-color: #fff;
  height: 24px;
  cursor: pointer;
  margin-left: 12px;
  color: #666;
`;

export default formListItem;
