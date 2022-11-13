import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default Wrapper;
