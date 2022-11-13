import { render } from "@testing-library/react";
import Wrapper from "./Wrapper";

const wrappedRender = (view: JSX.Element) => render(view, { wrapper: Wrapper });

export { wrappedRender };
