import styled from "@emotion/styled";

export const ApproveItem = styled.div`
  height: 72px;
  width: 620px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffff;
  border-radius: 8px;
  background-color: #ffff;
  &:hover {
    border: 1px solid #dddddd;
    transition: ease-in-out 0.3s;
  }
`;

export const ProjectWrap = styled.div`
  width: 120px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
`;

export const ProjectDescWrap = styled.div`
  height: 46px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 15px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const Creator = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  background-image: linear-gradient(94.86deg, #e23c96 2.66%, #ffe870 120.27%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Approve = styled.div`
  width: 72px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 32px;
  .approve {
    background-color: #ffff;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #00a3ff;
    cursor: pointer;
  }
  .refuse {
    cursor: pointer;
    background-color: #ffff;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f01a1a;
  }
`;
