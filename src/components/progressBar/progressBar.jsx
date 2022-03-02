import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ progress, setProgress }) => {

  return (
    <ProgressBarContainer>
      <Filler progress={progress}>
        <StyledLabel>{`${progress}%`}</StyledLabel>
      </Filler>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #6a1b9a;
  transition: 5s;
  border-radius: inherit;
  text-align: right;
`;
const StyledLabel = styled.span`
  padding: 5px;
  color: #ffffff;
  font-weight: 700;
`;

export default ProgressBar;
