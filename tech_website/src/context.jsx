import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
  content: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "technology website",
        image: "Images/hero.svg",
        content:
          "A technology website, also known as a tech website or tech blog, is a digital platform or online publication that primarily focuses on providing information, news, reviews, and insights related to technology and its various aspects.",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "technology Solution",
        image: "Images/about1.svg",
        content:
          "Technology websites often cater to a wide audience, including tech enthusiasts, professionals, developers, consumers, and anyone interested in staying informed about the rapidly evolving world of technology. They may also include forums, user-generated content, and community features that encourage discussion and interaction among readers.",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
