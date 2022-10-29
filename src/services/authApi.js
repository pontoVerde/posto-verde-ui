import axios from 'axios'

const AuthApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_API
  }); 

export default AuthApi;