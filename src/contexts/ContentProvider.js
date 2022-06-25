import { createContext, useContext, useState } from 'react';

// create context

const StateContext = createContext();

// initialState

const initialState = {
  chat: false,
  cart: false,
  userPorfile: false,
  notifications: false,
};

// create provider
export const ContextProvider = ({ children }) => {
  // add state
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// use statecontext
export const useSatateContext = () => useContext(StateContext);
