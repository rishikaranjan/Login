
import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import axios from 'axios';



export const LoginScreen = () => {

    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const loginHandler = async (e) => {

        e.preventDefault();

        try 
        {

          const { data } = await axios.post(
            '/api/users/login', 
          {
            username,
            password,

          });

          alert(data.message);

          if(data.username) {
            navigate('/');
          }
  

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

            <button onClick={loginHandler}>Login</button>


            <Link to='/register'>Register</Link>


        </div>
    )
}