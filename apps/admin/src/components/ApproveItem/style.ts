import styled from "@emotion/styled";

export const ApproveItem = styled.div`
  height: 4.5rem;
  width: 38.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.0625rem solid #ffff;
  border-radius: 0.5rem;
  background-color: #ffff;
  margin-bottom: 12px;
  &:hover {
    border: 0.0625rem solid #dddddd;
    transition: ease-in-out 0.3s;
  }
`;

export const ProjectWrap = styled.div`
  height: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
`;

export const ProjectDescWrap = styled.div`
  height: 2.875rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 0.9375rem;
`;

export const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const Creator = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  background-image: linear-gradient(94.86deg, #e23c96 2.66%, #ffe870 120.27%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Approve = styled.div`
  width: 4.5rem;
  height: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 2rem;
  .approve {
    background-color: #ffff;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: -0.02em;
    color: #00a3ff;
    cursor: pointer;
  }
  .refuse {
    cursor: pointer;
    background-color: #ffff;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: -0.02em;
    color: #f01a1a;
  }
`;
