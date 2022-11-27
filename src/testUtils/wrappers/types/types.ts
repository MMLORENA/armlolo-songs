import { InitialEntry } from "@remix-run/router";
import useSong from "../../../hooks/useSong";
import { SongsStructure } from "../../../store/contexts/types";

interface WrapperOptions {
  renderOptions: {
    currentState?: SongsStructure;
    dispatch?: jest.Mock<any, any>;
    initialEntries?: InitialEntry[];
  };
}

export interface WrapperProps extends WrapperOptions {
  children: JSX.Element | JSX.Element[];
}

export interface WrapperRenderHookProps extends WrapperOptions {
  customHook: typeof useSong;
}
