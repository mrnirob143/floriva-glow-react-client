import React, { createContext } from 'react';


export const FlorivaContext = createContext(null);
const Context = ({children}) => {

      const data = {
            MyName: 'test'
        }
    return (
      
        <FlorivaContext.Provider value={data}>

      {children}
        </FlorivaContext.Provider>
    );
};

export default Context;