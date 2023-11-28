import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    console.log(testimonials)
    return (
        <div>
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