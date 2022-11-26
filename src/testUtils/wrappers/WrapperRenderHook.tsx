import { renderHook } from "@testing-library/react";
import { WrapperRenderHookProps } from "./types/types";
import Wrapper from "./Wrapper";

const WrapperRenderHook = ({
  customHook,
  renderOptions: { dispatch, currentState },
}: WrapperRenderHookProps) =>
  renderHook(() => customHook(), {
    wrapper: ({ children }) => (
      <Wrapper renderOptions={{ currentState, dispatch }}>{children}</Wrapper>
    ),
  });

export default WrapperRenderHook;
