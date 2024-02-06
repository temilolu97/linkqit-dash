import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Button, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import apiRequest from '../helpers/HttpRequestHelper';

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let {login} = useAuth()

    const handleLogin=async () =>{
        let data ={
            "identifier" :email,
            "password":password
        }
        const response = await apiRequest("post", "/login",data,{device:"YWZjYWJmZDI3MTRmYTRlMnx8c2Ftc3VuZ3x8QW5kcm9pZHx8OXx8ZG0temFDbnhRUk9FdzdWLXBXdXdhMTpBUEE5MWJGRzBrbG15cDNOM083dkVVc0lqODhzeTRNVlVkaVRFcXhPRVZ6djhLQ3VNVDhNSUtqS1E3cWR3VjB5UmQ1bElNTnpJZnRPUWprbHp2QzFFZ1IxbDdJZjhFS19lYmpNY21JajJJUE5ScExrem5zc2MwbWk3cGdQN1dUSXlDWXBIRHIyM243ZA=="})
        console.log(response);
        login(response.data.personalDetail, response.data.accessToken.token)
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-sm w-full'>
        <img src={logo} alt='Logo' />
        <p className='text-left font-bold'>Log in to back office </p>
        <form className='flex flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label className='text-left' htmlFor='email' value='Email' />
            </div>
            <TextInput id='email1' type='email' placeholder='' value={email} required onChange={e=>setEmail(e.target.value)} />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password' value='Your password' />
            </div>
            <TextInput id='password' type='password' value={password} required onChange={e=>setPassword(e.target.value)} />
          </div>
          <Button className='rounded-none' color='blue' onClick={handleLogin}>Log in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
