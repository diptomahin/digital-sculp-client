import { Button, Card, Label, Select, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

import { FileInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxios from '../../Hooks/UseAxios';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext)
    const axiosPublic = useAxios();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get("name")
        const userRole = form.get("roles")
        const email = form.get("email")
        const password = form.get("password")
        const bankAccount = form.get("bank")
        const salary = form.get("salary")
        const photoUrl = form.get("photoUrl").name
        // const res = await axiosPublic.post(image_hosting_api, photoUrl, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // if (res.data.success) {
        //     // now send the menu item data to the server with the image url
        //     const savedUser1 = {
        //         displayName,
        //         userRole,
        //         email,
        //         password,
        //         bankAccount,
        //         salary,
        //         image: res.data.data.display_url
        //     }
        //     console.log(savedUser1)
        //     // 
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
            .then(() => {
                const savedUser = { displayName, userRole, email, password, photoUrl, bankAccount, salary }

                axiosPublic.post('/users', savedUser)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })

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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
                        <Select id="roles" name='roles' required>
                            <option>employee</option>
                            <option>hr</option>
                        </Select>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bankAccount" value="Bank_Account" />
                        </div>
                        <TextInput id="bank" name='bank' type="text" placeholder="Your Bank Account" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="salary" value="salary" />
                        </div>
                        <TextInput id="salary" name='salary' type="text" placeholder="Your Salary" required />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
            <p>Have an account?? <span className='text-blue-600'><Link to='/login'>Register</Link></span></p>
        </Card>
    </div>
);
};

export default Register;