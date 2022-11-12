import styled from "styled-components";

const HeaderStyled = styled.header`
  font-size: 1rem;

  .main-title {
    :first-child {
      color: ${(props) => props.theme.primaryColor};
    }

    :nth-child(2) {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

export default HeaderStyled;
