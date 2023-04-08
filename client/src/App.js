import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { HomeScreen } from './Screens/HomeScreen';
import { LoginScreen } from "./Screens/LoginScreen";
import { RegisterScreen } from "./Screens/RegisterScreen";



function App() {

  return (
    <div className="app">

    <Router>

        <Routes>

          <Route path = "/" element= {<HomeScreen/>}/>

          <Route path = "/login" element= {<LoginScreen/>}/>

          <Route path = "/register" element= {<RegisterScreen/>}/>

        </Routes>

      </Router>
      
     
    </div>
  );
}

export default App;
