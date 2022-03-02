import React from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = ({ inputValues, setInputValues, setAddressKakakoApi }) => {
  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '400px',
    height: '400px',
    padding: '7px',
  };

  const handleComplete = async (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(fullAddress);
    await setAddressKakakoApi(fullAddress);
  };
  return <DaumPostCode onComplete={handleComplete} style={postCodeStyle} />;
};

export default DaumPost;
