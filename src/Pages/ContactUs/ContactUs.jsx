import { Label, TextInput } from 'flowbite-react';
import Banner from '../Home/HomeComonents/Banner';

import { Button } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Sculp || Contact </title>
            </Helmet>
            <Banner></Banner>
            <div className='w-11/12 mx-auto my-20   bg-[#D4F6C8] p-10 rounded-lg'>
                <h1 className="text-3xl text-center mb-5 font-bold border-[#FFE074] border-x-2 py-5 bg-[#D4F6C8] border-y-4">Contact US</h1>
                <div className="flex max-w-md flex-col gap-4 mx-auto" >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="small" value="Your Name" />
                        </div>
                        <TextInput id="small" type="text" sizing="sm" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Your Email" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="large" value="Query" />
                        </div>
                        <TextInput id="large" type="text" sizing="lg" />
                    </div>
                </div>
                <Button color="info" className='mx-auto mt-4'>Submit</Button>
            </div>
            <div className='w-11/12 mx-auto my-20   bg-[#D4F6C8] p-10 rounded-lg'>
                <h1 className="text-3xl text-center mb-5 font-bold border-[#FFE074] border-x-2 py-5 bg-[#D4F6C8] border-y-4">Address</h1>
                <p className='text-2xl font-semibold text-center'>
                    email: digital@conatact.com <br />
                    phone:+440264856 <br />
                    DigitalSculpt Marketing <br />
                    123 Digital Avenue <br />
                    Cityville, State 56789 <br />
                    Country <br />
                    </p>
            </div>
        </div>
    );
};

export default ContactUs;