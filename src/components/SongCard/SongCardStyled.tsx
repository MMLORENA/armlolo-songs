import styled from "styled-components";

const SongCardStyled = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  height: fit-content;
  justify-content: space-between;
  width: 100%;

  .song-data-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .song {
    &__position {
      font-size: 0.75rem;
    }

    &__title {
      font-size: 1rem;
      color: ${(props) => props.theme.primaryColor};

      &--active {
        color: ${(props) => props.theme.secondaryColor};
      }
    }

    &__duration {
      font-size: 0.75rem;
    }

    &__album {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`;

export default SongCardStyled;
