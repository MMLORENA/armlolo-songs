import styled from "styled-components";

const SongsListStyled = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;

  .songs-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .none-songs {
    font-size: 1.5rem;
  }
`;

export default SongsListStyled;
