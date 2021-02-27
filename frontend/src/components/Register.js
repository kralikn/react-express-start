import React from 'react';
import {Link} from "react-router-dom";

const Register = ({ handleRegisterInput, handleRegisterSubmit }) => {
  return (
    <>
      <form className="form" onSubmit={handleRegisterSubmit}>
        <div className="form-control">
          <label htmlFor="username">Felhasználónév</label>
          <input type="text" onChange={handleRegisterInput} name="username" id="username"/>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" onChange={handleRegisterInput}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Jelszó</label>
          <input type="password" name="password" id="password" onChange={handleRegisterInput}/>
        </div>
        <button className="btn" ype="submit">Regisztráció</button>
        <Link className="link" to="/">Belépés</Link>
     </form>
    </>
  )
}

export default Register
