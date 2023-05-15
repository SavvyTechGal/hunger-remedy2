import "./login.css"




const Login = () => {


  return (
    <div>
        <p>Enter your email account:</p>
        <input className="inputText" type="text" placeholder="xxx@gmail.com"  />
        <p></p>
        <button className="submitButton">Submit</button>
    </div>
  );
};

export default Login;