import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BiChevronDown, BiCheck } from 'react-icons/bi';
import { BsFillFileArrowDownFill } from 'react-icons/bs';
import Modal from '../components/modal/Modal';
import DaumPost from '../components/DaumPost';
import { openModal, closeModal } from '../actions';

const Form = () => {
  const dispatch = useDispatch();
  const { isModalShown } = useSelector((state) => ({
    isModalShown: state.modal.isModalShown,
  }));
  const [inputValues, setInputValues] = useState({
    name: '',
    phone: '',
    fullAddress: '',
    input_0: '',
    input_1: '',
    agreement: true,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isAllItemFilled, setIsAllItemFilled] = useState(false);
  const { name, phone, fullAddress, input_0, input_1, agreement } = inputValues;
  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, SetAddressDetail] = useState('');
  const [isOpenPost, setIsOpenPost] = useState(false);

  const onChangeInputName = (e) => {
    setInputValues({
      ...inputValues,
      name: e.target.value,
    });
  };

  const onChangeInputValues = (e) => {
    const { value, name } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const onChangePost = () => {
    setIsOpenPost(!!isOpenPost);
  };

  const onClickOpenModal = () => {
    dispatch(openModal());
  };

  const onClickCloseModal = () => {
    dispatch(closeModal());
  };

  const setAddressKakakoApi = (data) => {
    setInputValues({
      ...inputValues,
      fullAddress: data,
    })
    dispatch(closeModal());
  }
  console.log(inputValues);

  return (
    <Container>
      <Wrapper>
        <h2>이름</h2>
        <br />
        <InputField />
      </Wrapper>
      <Wrapper>
        <h2>휴대폰번호</h2>
        <br />
        <InputField />
      </Wrapper>
      <Wrapper>
        <h2>배송지</h2>
        <br />
        <InputField
          onClick={() => onClickOpenModal()}
          value={inputValues.fullAddress}
        />
      </Wrapper>
      <Wrapper>
        <h2>옵션1</h2>
        <br />
        <OptionWrapper>
          <BiChevronDown />
        </OptionWrapper>
      </Wrapper>
      <Wrapper>
        <h2>첨부파일(선택)</h2>
        <br />
        <SectionWrapper>
          <AttachSection>
            <InnerSection>
              <ButtonContainer>
                <ButtonWrapper>
                  <AttachButton>
                    <ButtonContentesWrapper>
                      <BsFillFileArrowDownFill />
                      <br />
                      <p>눌러서 파일등록</p>
                    </ButtonContentesWrapper>
                  </AttachButton>
                </ButtonWrapper>
              </ButtonContainer>
            </InnerSection>
          </AttachSection>
        </SectionWrapper>
      </Wrapper>
      <p>첨부파일은 위와 같이 입력할 수 있습니다.</p>
      <br />
      <div>
        <Label>
          <LabelContentsWrapper>
            <CheckBoxWrapper>
              <Checkbox type="checkbox" />
              {isChecked === false ? (
                <Unchecked />
              ) : (
                <CheckedIconWrapper>
                  <BiCheck />
                </CheckedIconWrapper>
              )}
            </CheckBoxWrapper>
            <span>개인정보 수집 약관 동의(필수)</span>
          </LabelContentsWrapper>
        </Label>
      </div>
      <br />
      <SummitButtonContainer>
        <SummitButtonWrapper>
          <SummitButton>제출하기</SummitButton>
        </SummitButtonWrapper>
      </SummitButtonContainer>
      {isModalShown ? (
        <Modal>
          <DaumPost
            inputValues={inputValues}
            setInputValues={setInputValues}
            setAddressKakakoApi={setAddressKakakoApi}
          />
        </Modal>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 428px;
  padding: 20px;
  /* background-color: #f7f7f7; */
  position: relative;
`;

const Wrapper = styled.div`
  width: 428px;
  margin-bottom: 20px;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  width: 100%;
  border: 1px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  outline: 2px solid trasparent;
  font-size: 1rem;
  padding: 1rem;
  border-width: 1px;
  border-radius: 0.5rem;
  width: 100%;
`;

const SectionWrapper = styled.div`
  padding: 0.25em 1.25em;
`;

const AttachSection = styled.div`
  position: relative;
  width: 260px:
  height 216px;
  padding-bottom: 60%;
  border: 1px solid tomato;
`;

const InnerSection = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  border-radius: 0.375rem;
  cursor: pointer;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border: 1px solid green;
  cursor: poiter;
  user-seletor: none;
`;

const AttachButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: poiner;
  line-height: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: 1px solid rgb(241, 243, 245);
  background-color: rgba(248, 250, 251);
`;

const ButtonContentesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelContentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  cursor: ponter;
`;

const Checkbox = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Unchecked = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  padding: 0.25em;
  border: 1px solid rgba(214, 217, 220);
`;

const CheckedIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: rgb(255, 51, 85);
  fill: rgb(255, 51, 85);
`;

const SummitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
`;

const SummitButtonWrapper = styled.div`
  padding: 0.75rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const SummitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isAllFilled &&
    css`
       {
        background-color: rgb(255, 51, 85);
        color: rgb(255, 255, 255);
      }
    `}
  background-color: rgba(255, 51, 85, 0.2);
  border-radius: 8px;
  border: 1px solid rgb(241, 243, 245);
  color: rgb(255, 255, 255);
  cursor: not-allowed;
  font-size: 1rem;
  font-weight: 700;
  padding: 16px 16px;
  text-align: center;
  height: 42px;
`;

export default Form;
