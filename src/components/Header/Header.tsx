import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1>
        <span className="main-title">Music </span>
        <span className="main-title">Addicts</span>
      </h1>
    </HeaderStyled>
  );
};

export default Header;
