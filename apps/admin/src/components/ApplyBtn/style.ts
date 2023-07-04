import styled from "@emotion/styled";

export const ApplyBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(137.32deg, #e23c96 18.62%, #ffe870 106.69%);

  .active {
    border: 10px solid black;
  }
`;
