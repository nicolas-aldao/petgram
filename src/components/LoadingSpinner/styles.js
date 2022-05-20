import styled from "styled-components";
import { spinAnim } from "../../styles/animations";

export const SpinnerWrapper = styled.div`
  background-color: rgba(210, 210, 210);
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(200, 200, 200, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  ${spinAnim()};
`;
