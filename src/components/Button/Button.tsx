import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  type: "button" | "submit";
  isDisable: boolean;
  action?: () => void;
}

const Button = ({
  text,
  type,
  isDisable,
  action,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className="button"
      onClick={action}
      type={type}
      disabled={isDisable}
      semantic={text ? "button" : "icon"}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
