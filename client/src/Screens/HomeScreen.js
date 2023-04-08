import { useNavigate } from 'react-router-dom'


export const HomeScreen = () => {

    const navigate = useNavigate();


    const logoutHandler = () => {

        navigate('/login');

    }



    return (
        <div>

            <h1>Home</h1>

            <div onClick={logoutHandler}>Logout</div>

        </div>
    )
}


