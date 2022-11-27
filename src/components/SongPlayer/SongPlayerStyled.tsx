import styled from "styled-components";

const SongPlayerStyled = styled.article`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100vw;
  height: 100px;
  border: 2px solid ${({ theme: { colors } }) => colors.secondaryColor};
  background-color: ${({ theme: { colors } }) => colors.mainLight};
  border-radius: 5px;
  overflow: hidden;
  color: ${({ theme: { colors } }) => colors.mainDark};
  @media (min-width: 900px) {
    flex-direction: row;
  }
  .song-data {
    &__main {
      width: 100%;
    }
    &__container {
      & :not(:last-child)::after {
        content: " ⚫️ ";
      }
      &:nth-child(n) {
        padding: 1rem 0 0 1rem;
      }
    }
    &__title,
    &__artist,
    &__album {
      font-size: 1rem;
    }
    @media (max-width: 500px) {
      &__artist,
      &__album {
        display: none;
      }
      &__container {
        & :not(:last-child)::after {
          content: "";
        }
      }
    }
    &__audio {
      width: 100%;
      &::-webkit-media-controls-panel {
        width: 100%;
        background-color: ${({ theme: { colors } }) => colors.mainLight};
      }
      &::-webkit-media-controls-current-time-display,
      &::-webkit-media-controls-time-remaining-display {
        color: ${({ theme: { colors } }) => colors.mainDark};
        box-shadow: none;
      }
    }
  }
`;

export default SongPlayerStyled;
