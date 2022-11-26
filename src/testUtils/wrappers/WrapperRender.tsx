import { render, RenderResult } from "@testing-library/react";
import { SongsStructure } from "../../store/contexts/types";
import Wrapper from "./Wrapper";

interface WrapperRenderProps {
  view: JSX.Element | JSX.Element[];
  renderOptions: {
    currentState?: SongsStructure;
    dispatch?: jest.Mock<any, any>;
  };
}

const WrapperRender = ({
  view,
  renderOptions: { currentState, dispatch },
}: WrapperRenderProps): RenderResult =>
  render(<Wrapper wrapperOptions={{ currentState, dispatch }}>{view}</Wrapper>);

export default WrapperRender;
