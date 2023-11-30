import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';

const Testimonials = () => {
    const axiosPublic = useAxios();
    const { data: testimonials = []} = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/testimonials');
            return res.data;
        }
    })
    // console.log(testimonials)
    return (
        <div className='text-center'>
             <h1 className="text-3xl mt-20 border-[#FFE074] border-x-2 py-5 bg-[#D4F6C8] border-y-4 font-bold">Testimonials</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center w-3/5 my-16">

                {
                    testimonials.map(testimonial =>
                        <SwiperSlide key={testimonial._id} testimonial={testimonial}>
                       <div className='items-center text-center'>
                       <h3 className='text-2xl font-semibold my-5'>{testimonial.serviceName}</h3>
                            <Rating
                                className='mx-auto'
                                style={{ maxWidth: 180 }}
                                value={testimonial.rating}
                                readOnly/> 
                            <p className='text-xl w-4/5 mx-auto my-3'>{testimonial.comment}</p>
                            <h3 className='text-2xl'>{testimonial.author}</h3>
                            <p className='text-lg'>{testimonial.email}</p>
                       </div>
                        </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;