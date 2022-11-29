import ButtonStyled from "./ButtonStyled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button = ({ text, ...props }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className="button"
      {...props}
      semantic={text ? "button" : "icon"}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
