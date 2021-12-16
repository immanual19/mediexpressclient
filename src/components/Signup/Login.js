import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import './Signup.css';
const Login = () => {
  const history=useHistory();
  const location=useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

      const url='http://localhost:8080/login';
      fetch(url,{
        method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Login successful');
          const getUserInfo=localStorage.getItem('mediExpressUser');
          const parsedGetUserInfo=JSON.parse(getUserInfo);
          parsedGetUserInfo.Name=data[0].Name;
          parsedGetUserInfo.Email=data[0].Email;
          parsedGetUserInfo.UserType=data[0].UserType;
          parsedGetUserInfo.Sex=data[0].Sex;
          parsedGetUserInfo.Age=data[0].Age;
          parsedGetUserInfo.isSignedIn=true;
          
          localStorage.setItem('mediExpressUser',JSON.stringify(parsedGetUserInfo));
          history.replace(from);
          window.location.reload();
        }
        else{
          alert('User does not exist');
        }
      })
      
  };

    return (
        <div className="signupform">
        <br />
        <Button variant="contained">Login Here</Button> <br />  <br />
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> <br /> <br />
      <input type="password" placeholder="Password" {...register("Password", {required: true, min: 6, maxLength: 12})} /> <br /> <br />
      
       <Link to='/signup'> <p><a href="">New User? Sign Up Here.</a></p> </Link>
      <br /> <Button variant="contained" input type="submit"> Login </Button>
    </form>
        </div>
    );
};

export default Login;