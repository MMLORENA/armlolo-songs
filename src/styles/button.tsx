import { css } from "styled-components";

const button = css`
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

export default button;
