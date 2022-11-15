import styled from "styled-components";
import React from "react";

const HeadingStyled = styled(React.Fragment)`
  .title {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default HeadingStyled;
