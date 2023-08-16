// create a context  (warehouse) ✅
// provider
// consumer / useContext

import React, { useContext, useReducer } from "react";
import reducer  from "./reducer";

const AppContext = React.createContext();

const intialState={
  name: '',
  image:"",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Thapa Technical",
        image: "Images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Alex Thapa",
        image: "Images/about1.svg",
      },
    });
  };


  return (
    <AppContext.Provider value = {{...state, updateHomePage, updateAboutPage}}>
      {children}
    </AppContext.Provider>
  );
} ;

// gloabal custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
// export { AppProvider, useGlobalContext };