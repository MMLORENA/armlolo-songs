import styled from "styled-components";

const AddSongStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  border-radius: 5px;
  border: 2px solid ${({ theme: { colors } }) => colors.secondaryColor};
  padding: 0.5rem;
  width: 100%;
  max-width: 31.25rem;
  align-self: center;

  .add-audio {
    &__input-label {
      text-align: center;
      font-size: 1.1rem;
      color: ${({ theme: { colors } }) => colors.primaryColor};
      cursor: pointer;
    }

    &__input {
      display: none;
    }

    &__selected-file {
      display: inline-block;
      height: 1rem;
      margin: 0.3rem;
    }
  }
`;

export default AddSongStyled;
