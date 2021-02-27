import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';


function App() {
  
  // Login
  const [user, setUser] = useState ({})
  
  const handleLoginInput = (e) => {
    console.log(e.target);
    const value = e.target.value;
    const name = e.target.name;
    setUser({...user, [name]: value})
  }
  
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    
    axios.post('http://localhost:5000', user
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    setUser({})
  }
  
  //Register
  const [registerUser, setRegisterUser] = useState ({})

  const handleRegisterInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegisterUser({...registerUser, [name]: value})
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/register', registerUser
      )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setRegisterUser({})
  }

  return (
    <div className="container">
      <Router >
        <Route path="/" exact>
          <Login
            handleLoginInput={handleLoginInput}
            handleLoginSubmit={handleLoginSubmit}
          />            
        </Route>

        <Route path="/register">
          <Register
            handleRegisterSubmit={handleRegisterSubmit}
            handleRegisterInput={handleRegisterInput}
          />          
        </Route>

        {/* <Route path="/dashboard">
          <Dashboard />         
        </Route> */}
    </Router>
    </div>
  );
}

export default App;
