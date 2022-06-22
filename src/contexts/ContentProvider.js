import { createContext, useContext, useState } from 'react';

// create context

const StateContext = createContext();

// initialState

const initialState = {
  chat: false,
  cart: false,
  userPofile: false,
  notifications: false,
};

// create provider
export const ContextProvider = ({ children }) => {
  // add state
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ activeMenu,setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
}; 

// use statecontext
export const useSatateContext = () => useContext(StateContext);
