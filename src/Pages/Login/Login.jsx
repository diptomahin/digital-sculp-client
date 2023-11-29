import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const { signIn,   handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin=e=>{
      e.preventDefault();

      const form = new FormData(e.currentTarget)
      const email = form.get("email")
      const password = form.get("password")
      console.log(email,password)
      setErrorMessage('');


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    const handleGoogle=()=>{
      handleGoogleSignIn()
    }
    return (
       <div className='py-32 mx-auto'>
        <Helmet>
                <title>Sculp || login </title>
            </Helmet>
         <Card className="max-w-sm mx-auto">
            <h1 className='text-3xl font-bold'>Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" name='email' type="email" placeholder="Your Email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" name='password' placeholder='Your Password' type="password" required />
          </div>
          {
                errorMessage ?
                  <div className="my-3 ">
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  </div>
                  :
                  <div></div>
          }
          <Button type="submit">Login</Button>
        </form>
        <Button onClick={handleGoogle}><FaGoogle/> Login with Google</Button>
        <p>New here?? <span className='text-blue-600'><Link to='/register'>Register</Link></span></p>
      </Card>
       </div>
    );
};

export default Login;