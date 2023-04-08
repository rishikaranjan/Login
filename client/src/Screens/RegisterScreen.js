
import React, { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from 'axios';




export const RegisterScreen = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const registerHandler = async (e) => {

        e.preventDefault();

        if(password !== confirmPassword) {
          alert('Password does not match'); 
          return;
        }

        try 
        {

          const { data } = await axios.post(
            '/api/users/register', 
          {
            username,
            password,

          });

          navigate('/');

        } 
        
        catch (err) 
        {
            console.log(err);
        }

      };





    return (

        <div>

            <input type="username" placeholder="username" 
            onChange = {(event) => {
                setUsername(event.target.value);
            }}/>

            <input type="password" placeholder="Password"
            onChange = {(event) => {
                setPassword(event.target.value);
            }}/>

          <input type="password" placeholder="Confirm Password"
            onChange = {(event) => {
                setConfirmPassword(event.target.value);
            }}/>


            <button onClick={registerHandler}>Register</button>


    
            <Link to='/login'>Login</Link>


        </div>
    )
}