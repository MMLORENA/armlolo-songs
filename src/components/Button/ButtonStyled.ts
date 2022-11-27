import styled, { css } from "styled-components";

interface ButtonStyledProps {
  semantic: "button" | "icon";
}

const buttonStyle = css`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  min-width: 5rem;
  min-height: 2rem;
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondaryColor};
  }

  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.mainLight};
    border: ${({ theme: { colors } }) => colors.secondaryColor} 2px solid;
  }
`;

const iconStyle = css`
  border-radius: 50px;
  border: ${({ theme: { colors } }) => colors.primaryColor} 2px solid;
  width: fit-content;
  height: fit-content;
  min-width: 2rem;
  min-height: 2rem;
  background-color: ${({ theme: { colors } }) => colors.mainLight};
  color: ${({ theme: { colors } }) => colors.secondaryColor};

  &::before {
    content: "X";
    text-align: center;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.primaryColor};
    border: ${({ theme: { colors } }) => colors.secondaryColor} 2px solid;
  }
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${(props) => props.semantic === "button" && buttonStyle};
  ${(props) => props.semantic === "icon" && iconStyle}
`;

export default ButtonStyled;
