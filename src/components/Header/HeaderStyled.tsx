import styled from "styled-components";

const HeaderStyled = styled.header`
  font-size: 1rem;

  .main-title {
    :first-child {
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }

    :nth-child(2) {
      color: ${({ theme: { colors } }) => colors.secondaryColor};
    }
  }
`;

export default HeaderStyled;
