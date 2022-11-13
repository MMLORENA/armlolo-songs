import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.mainDark};
  color: ${(props) => props.theme.mainLight};
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .a {
    display: flex;
    flex-direction: column;
  }
`;

export default AppStyled;
