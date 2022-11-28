import { render } from "@testing-library/react";
import { WrapperProps } from "./types/types";
import Wrapper from "./Wrapper";

const WrapperRender = ({
  children,
  renderOptions: { currentState, dispatch, initialEntries },
}: WrapperProps) =>
  render(
    <Wrapper renderOptions={{ currentState, dispatch, initialEntries }}>
      {children}
    </Wrapper>
  );

export default WrapperRender;
