import React from 'react';

const FormEditFields = () => {
  return (
    <form>
      <fieldset>
        <select name="type">
          <option value="텍스트">텍스트</option>
          <option value="전화번호">전화번호</option>
          <option value="주소">주소</option>
          <option value="드롭다운">드롭다운</option>
          <option value="첨부파일">첨부파일</option>
          <option value="이용약관">이용약관</option>
        </select>
      </fieldset>
      <fieldset>
        <input type="text" />
      </fieldset>
      <fieldset>
        <input type="checkbox" id="required" />
        <label htmlFor="required">필수</label>
      </fieldset>
      <button>드래그</button>
      <button>삭제</button>
    </form>
  );
};

export default FormEditFields;