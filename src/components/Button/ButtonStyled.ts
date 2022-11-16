import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 5px;
  border: none;
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondaryColor};
  }
`;

export default ButtonStyled;
