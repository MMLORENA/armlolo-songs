import styled from "styled-components";

const LayoutStyled = styled.div`
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
`;

export default LayoutStyled;
