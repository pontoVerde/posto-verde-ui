import { createContext, useEffect, useState } from "react";
import Router from 'next/router'

import { setCookie, parseCookies, destroyCookie } from 'nookies'

// import { recoverUserInformation, signInRequest } from "../controllers";
import AuthApi from '../services/authApi';


export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const isAuthenticated = !!user;

  async function getUserData(token) {
    const response = await AuthApi('/checkUser', {
        method: 'POST',
        data: { token }
    })
    if(response.data){
        setUser(response.data.user)
    }
  }

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    if (token) {
        getUserData(token)
    }
  }, [])

  async function signIn(email, password) {
    const auth = await AuthApi('/auth', {
        method: 'POST',
        data: { email , password }
    })

    const { token, user } = auth.data

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 4
    })

    AuthApi.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    Router.push('/menu');
  };

  function signOut() {
    destroyCookie(null, 'nextauth.token')
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}