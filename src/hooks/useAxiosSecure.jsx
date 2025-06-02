import React from 'react';
import UseAuth from './UseAuth';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://career-code-server-one.vercel.app',
})

const useAxiosSecure = () => {
  const {user,signOutUser} = UseAuth();
  axiosInstance.interceptors.request.use(config=>{
    config.headers.Authorization = `Bearer ${user.accessToken}`
    return config;
  });

// response interceptor
  axiosInstance.interceptors.response.use(response =>{
    return response;
  }, error =>{
    if(error.status === 401 || error.status === 403){
      signOutUser()
      .then(()=>{
        console.log('signout user for 401 status code')
      })
      .catch(err =>{
        console.log(err);
      })
    }
    return Promise.reject(error);
  })

    return axiosInstance;
};

export default useAxiosSecure;