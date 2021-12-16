import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
    const [errorNewUser, setErrorNewUser] = useState(false);
    const [createNewUser,setCreateNewUser]=useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const url='http://localhost:8080/signup';
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        setCreateNewUser(true);
      }
      else{
        setErrorNewUser(true);
      }

    })
  };
  //console.log(errors);
    return (
        <div className="signupform">
        <Button variant="contained">Sign Up Here</Button> <br />
        <form onSubmit={handleSubmit(onSubmit)}>
      <br /><input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} /> <br /> <br />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> <br /> <br />
      <input type="password" placeholder="Password" {...register("Password", {required: true, min: 6, maxLength: 12})} /> <br /> <br />
      <input type="number" placeholder="Age" {...register("Age", {required: true, maxLength: 80})} /> <br />
      <label for="Sex">Sex</label><br/>
      <select {...register("Sex", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select> <br />
      <label for="UserType">User Type</label><br/>
      <select {...register("UserType", { required: true })}>
        <option value="Patient">Patient</option>
        <option value="Doctor">Doctor</option>
        <option value="Admin">Admin</option>
      </select>
      <br /> <br /><Link to='/login'> <p><a href="">Already have an account? Login here.</a></p> </Link>
      {
        errorNewUser ? ( <p style={{"color":"red"}}>User with this email already exists. Try Login In</p> ):( <p></p> )
      }
      {
        createNewUser ? ( <p style={{"color":"green"}}>User Created Successfully.</p> ):( <p></p> )
      }
      <br /> <Button variant="contained" input type="submit"> Sign Up </Button>
    </form>
        </div>
    );
};

export default Signup;