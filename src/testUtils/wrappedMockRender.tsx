import { render } from "@testing-library/react";
import MockWrapper from "./MockWrapper";

const wrappedMockRender = (view: JSX.Element) =>
  render(view, { wrapper: MockWrapper });

export { wrappedMockRender };
