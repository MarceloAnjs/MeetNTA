import React, {createContext} from 'react';
import Auth from '../services/AUTH'

const AuthContext = createContext();

const AuthProvider = ({children}) => {   
    const {authenticated, token, handleLogin, handleLogout} = Auth();    
    return (
      <AuthContext.Provider value={{
          authenticated,
          handleLogin,
          handleLogout,
          token,  

          }}>
        {children}
      </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext}
