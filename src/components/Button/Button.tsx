import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action: () => void;
}

const Button = ({ text, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="button" onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
