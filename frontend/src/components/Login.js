// import FormData from 'form-data';
import {Link} from "react-router-dom";

const Login = ({ handleLoginInput, handleLoginSubmit }) => {

    return (
    <>
      <form className="form" onSubmit={handleLoginSubmit}>
        <div className="form-control">
          <label htmlFor="username">Felhasználónév</label>
          <input type="text" name="username" id="username" onChange={handleLoginInput}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Jelszó</label>
          <input type="password" name="password" id="password" onChange={handleLoginInput}/>
        </div>
        <button className="btn" type="submit">Belépés</button>
        <Link className="link" to="/register">Regisztráció</Link>
     </form>
    </>
  )
}

export default Login
