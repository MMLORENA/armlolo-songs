import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.mainDark};
  color: ${({ theme: { colors } }) => colors.mainLight};
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
