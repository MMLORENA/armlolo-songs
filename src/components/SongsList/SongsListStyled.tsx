import styled from "styled-components";

const SongsListStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .songs-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .none-songs {
    font-size: 1.5rem;
  }
`;

export default SongsListStyled;
