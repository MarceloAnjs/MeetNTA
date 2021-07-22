import { useState, useEffect } from 'react';
import useStorage from './STORAGE';
import api from './API';

export default function useAuth() {
  const [token, setToken] = useStorage("token");
  const [authenticated, setAuthenticated] = useState(false);  

  useEffect(() => {    

    if (token) {
      //api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();   
    const formData = event.target;
    const userLogin = {
      email: formData.email.value,
      password: formData.password.value,
    };

    api.loginUser(userLogin)
      .then(({ data }) => {    
        setToken(data.Token);
        //api.defaults.headers.Authorization = `Bearer ${data.token}`;
        document.location = '/'
      })
      .catch((data) => {
        alert("Email or password is invalid");
      });
  };

  const handleLogout = () =>  {
    setAuthenticated(false);
    setToken(null);
    //api.defaults.headers.Authorization = undefined;
    document.location = '/login'
  }

  return { authenticated, token, handleLogin, handleLogout };
}