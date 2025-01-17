import React, { createContext, useReducer, useContext, useMemo, Dispatch } from "react";
import PropTypes from "prop-types";

interface State {
    openSidenav: boolean;
    sidenavColor: string;
    sidenavType: string;
    transparentNavbar: boolean;
    fixedNavbar: boolean;
    openConfigurator: boolean;
  }
  
  interface Action {
    type: string;
    value: any;
  }
  
  export const MaterialTailwind = createContext<[State, Dispatch<Action>]|null>(null);
  MaterialTailwind.displayName = "MaterialTailwindContext";
  
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "OPEN_SIDENAV": {
        return { ...state, openSidenav: action.value };
      }
      case "SIDENAV_TYPE": {
        return { ...state, sidenavType: action.value };
      }
      case "SIDENAV_COLOR": {
        return { ...state, sidenavColor: action.value };
      }
      case "TRANSPARENT_NAVBAR": {
        return { ...state, transparentNavbar: action.value };
      }
      case "FIXED_NAVBAR": {
        return { ...state, fixedNavbar: action.value };
      }
      case "OPEN_CONFIGURATOR": {
        return { ...state, openConfigurator: action.value };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }
  
  interface MaterialTailwindControllerProviderProps {
    children: React.ReactNode;
  }
  
  export function MaterialTailwindControllerProvider({ children }: MaterialTailwindControllerProviderProps) {
    const initialState: State = {
      openSidenav: false,
      sidenavColor: "blue",
      sidenavType: "dark",
      transparentNavbar: true,
      fixedNavbar: false,
      openConfigurator: false,
    };
  
    const [controller, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  
    return (
      <MaterialTailwind.Provider value={value}>
        {children}
      </MaterialTailwind.Provider>
    );
  }
  
  MaterialTailwindControllerProvider.displayName = "/src/context/index.jsx";
  
  MaterialTailwindControllerProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export function useMaterialTailwindController(): [State, Dispatch<Action>] {
    const context = useContext(MaterialTailwind);
  
    if (!context) {
      throw new Error(
        "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
      );
    }
  
    return context;
  }
  
  export const setOpenSidenav = (dispatch: Dispatch<Action>, value: any) =>
    dispatch({ type: "OPEN_SIDENAV", value });
  export const setSidenavType = (dispatch: Dispatch<Action>, value: any) =>
    dispatch({ type: "SIDENAV_TYPE", value });
  export const setSidenavColor = (dispatch: Dispatch<Action>, value: any) =>
    dispatch({ type: "SIDENAV_COLOR", value });
  export const setTransparentNavbar = (dispatch: Dispatch<Action>, value: any) =>
    dispatch({ type: "TRANSPARENT_NAVBAR", value });
  export const setFixedNavbar = (dispatch: Dispatch<Action>, value: any) =>
    dispatch({ type: "FIXED_NAVBAR", value });
  export const setOpenConfigurator = (dispatch: Dispatch<Action>, value: any) =>
    dispatch({ type: "OPEN_CONFIGURATOR", value });