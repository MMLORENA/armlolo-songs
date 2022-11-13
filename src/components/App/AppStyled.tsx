import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.theme.mainDark};
  color: ${(props) => props.theme.mainLight};
  min-height: 100vh;
  width: 100%;
`;

export default AppStyled;
