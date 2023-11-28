import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin=e=>{
      e.preventDefault();

      const form = new FormData(e.currentTarget)
      const email = form.get("email")
      const password = form.get("password")
      console.log(email,password)
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
          <Button type="submit">Login</Button>
        </form>
        <p>New here?? <span className='text-blue-600'><Link to='/register'>Register</Link></span></p>
      </Card>
       </div>
    );
};

export default Login;