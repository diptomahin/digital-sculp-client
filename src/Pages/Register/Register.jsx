import { Button, Card, Label, Select, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { FileInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const { createUser } = useContext(AuthContext)
  
    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const displayName = form.get("name")
        const userRole = form.get("roles")
        const email = form.get("email")
        const password = form.get("password")
        const photoUrl = form.get("photoUrl")

        const loggedUser = { displayName, userRole, email, password, photoUrl };
        console.log(loggedUser)
        setErrorMessage('')

        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
        if (password.length < 6) {
            setErrorMessage('Your Password Should Contain at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Your Password Should Contain at least 1 one uppercase letter')
            return;
        }

        else if (!/[!@#$%^&*]/.test(password)) {
            setErrorMessage('Your Password Should Contain at least 1 one special character')
            return;
        }

        createUser(email, password)
        .then(result => {
        console.log(result.user)
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage(error.message);
        })
    }
    return (
        <div className='py-32 mx-auto'>
            <Helmet>
                <title>Sculp || register </title>
            </Helmet>
            <Card className="max-w-sm mx-auto">
                <h1 className='text-3xl font-bold'>Register</h1>

                <form onSubmit={handleRegister} className="flex flex-col gap-4 ">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="displayName" value="Your Name" />
                        </div>
                        <TextInput id="name" name='name' type="text" placeholder="Write your name" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="roles" value="Select your role" />
                        </div>
                        <Select id="countries" name='roles' required>
                            <option>Employee</option>
                            <option>HR</option>
                        </Select>
                    </div>
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
                        <TextInput id="password1" name='password' type="password" required />
                    </div>
                    <div id="fileUpload" className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="file" value="choose Image" />
                        </div>
                        <FileInput id="file" name='photoUrl' helperText="A profile picture is useful to confirm your are logged into your account" />
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
                <p>Have an account?? <span className='text-blue-600'><Link to='/login'>Login</Link></span></p>
            </Card>
        </div>
    );
};

export default Register;