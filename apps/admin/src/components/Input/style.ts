import styled from "@emotion/styled";

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 35px;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  color: #ffffff;
`;
export const Input = styled.input`
  height: 44px;
  width: 480px;

  background: #191919;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding-left: 10px;
  color: #ffffff;
  font-weight: 300;
  font-size: 14px;
  transition: ease-in-out 0.5s;
  margin-bottom: 24px;
  &:focus {
    outline: none;
    border-color: #a7a7a7;
  }
`;
