import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.mainDark};
  color: ${(props) => props.theme.mainLight};
  min-height: 100vh;
  width: 100%;

  .a {
    display: flex;
    flex-direction: column;
  }
`;

export default AppStyled;
