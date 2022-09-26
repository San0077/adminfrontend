import React, { createContext, useState} from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [data, setdata] = useState([]);
 
  
  return (
    <MyContext.Provider
      value={{data,setdata}}
    >
          {children}
    </MyContext.Provider>
  );
};

export default AppContext;