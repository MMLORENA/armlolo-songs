import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  type: "button" | "submit";
}

const Button = ({ text, action, type }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="button" onClick={action} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
