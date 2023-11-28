import { Button, Card, Label, Select, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { FileInput } from 'flowbite-react';


const Register = () => {
    return (
        <div className='py-32 mx-auto'>
            <Card className="max-w-sm mx-auto">
            <h1 className='text-3xl font-bold'>Register</h1>

                <form className="flex flex-col gap-4 ">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" name='email' type="email" placeholder="Your Email" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Select your country" />
                        </div>
                        <Select id="countries" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
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
                            <Label htmlFor="file" value="Upload file" />
                        </div>
                        <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                <p>Have an account?? <span className='text-blue-600'><Link to='/login'>Register</Link></span></p>
            </Card>
        </div>
    );
};

export default Register;