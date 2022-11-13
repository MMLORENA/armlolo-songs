import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1>
        <span className="main-title">Armlolo </span>
        <span className="main-title">Songs</span>
      </h1>
    </HeaderStyled>
  );
};

export default Header;
