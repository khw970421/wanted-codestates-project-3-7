import React from 'react';
import { Container } from './Main';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const Submission = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  return (
    <Container>
      {/* map으로 폼 데이터 출력 */}
      {/* {sumbitData.map((obj, index) => {
        return (
          <SurveyItem obj={obj} key={index}>
            {obj.formId} 설문 답변
          </SurveyItem>
        );
      })} */}
      <SurveyItem>1. 설문 답변</SurveyItem>
      <SummitButton
        onClick={() => {
          navigate('/');
        }}
      >
        확인
      </SummitButton>
    </Container>
  );
};

const SurveyItem = styled.div`
  height: 50px;
  background-color: #eee;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 6px;
`;

const SummitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff3355;
  border-radius: 8px;
  border: 1px solid #f1f3f5;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 4px 16px;
  text-align: center;
  height: 40px;
`;

export default Submission;
