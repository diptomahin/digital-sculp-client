
const AboutUs = () => {
    return (
        <div >
            <h1 className="text-3xl text-center mt-20 font-bold border-[#FFE074] border-x-2 py-5 bg-[#D4F6C8] border-y-4">About Us</h1>
            <div>
                <p className="w-11/12 mx-auto bg-[#D4F6C8] rounded-lg text-xl my-10 p-10 font-semibold">At DigitalSculpt Marketing, our mission is to sculpt a prominent digital presence for your brand. We believe in the transformative power of strategic marketing, cutting-edge technology, and creative ingenuity. Through a holistic approach, we aim to elevate your brand, drive meaningful engagement, and foster lasting connections with your audience.</p>
                <p className="grid grid-cols-1 md:grid-cols-2 test-2xl gap-10 w-11/12 mx-auto  ">
                    <li className="bg-[#D4F6C8] rounded-lg p-7"> <span className="font-semibold">Expertise: </span> Our team comprises seasoned experts in various digital marketing domains, from SEO wizards and social media gurus to PPC maestros and content creators. We bring a wealth of experience and knowledge to every project.
                    </li>
                    <li className="bg-[#D4F6C8] rounded-lg p-7"> 
                     <span className="font-semibold">Innovation:</span> In the ever-evolving digital landscape, innovation is key. We stay ahead of the curve, leveraging the latest trends and technologies to keep your brand at the forefront of your industry.
                    </li>
                   <li className="bg-[#D4F6C8] rounded-lg p-7">
                    <span className="font-semibold">Client-Centric Approach:</span> Your success is our priority. We take the time to understand your unique goals and challenges, tailoring our strategies to meet your specific needs. Our collaborative approach ensures a seamless partnership.
                   </li>
                   <li className="bg-[#D4F6C8] rounded-lg p-7">
                 <span className="font-semibold">Results-Driven:</span> We measure our success by the success of our clients. From increased website traffic and engagement to higher conversion rates, we are committed to delivering tangible results that positively impact your business.
                    </li></p>
            </div>

        </div>
    );
};

export default AboutUs;