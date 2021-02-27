
const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit');

    const formData = new FormData(e.target)

    console.log(Object.fromEntries(formData));

    // axios.post('http://localhost:5000', formData)
    //   .then(res => console.log(res.data));

  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Felhasználónév</label>
          <input type="text" name="username" id="username"/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Jelszó</label>
          <input type="password" name="password" id="password"/>
        </div>
        <button className="btn" type="submit">Belépés</button>
        {/* <Link className="link" to="/register">Regisztráció</Link> */}
     </form>
    </>
  )
}

export default Login
