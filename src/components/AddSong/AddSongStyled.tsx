import styled from "styled-components";
import button from "../../styles/button";

const AddSongStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  padding: 0.5rem;
  .add-audio {
    &__input {
      display: none;
    }
    &__submit {
      ${button}
    }
    &__selected-file {
      display: inline-block;
      height: 1rem;
      margin: 0.3rem;
    }
  }
`;

export default AddSongStyled;