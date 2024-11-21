
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { GoCodeReview } from "react-icons/go";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Details = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);
    return (
        <div>
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className='bg-slate-200 p-3'>
                <div data-aos="slide-right">
                    <h1 className='text-center text-5xl font-extrabold text-green-900'>Why Choose Our Eco-Adventures?</h1>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className='grid lg:grid-cols-3 grid-cols-1 mt-10 gap-3'>
                    <div className="card bg-base-100 w-96 shadow-xl ml-4  ">
                        <div className="card-body ">
                            <h2 data-aos="fade-up" className="card-title text-xl font-semibold text-green-500">Sustainable Travel</h2>
                            <p>We prioritize sustainable practices that respect nature and protect the environment, ensuring a minimal ecological footprint.</p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl ml-4 ">
                        <div className="card-body ">
                            <h2 data-aos="fade-up" className="card-title text-xl font-semibold text-green-500">Expert Guides</h2>
                            <p>Our certified and passionate guides provide the best adventure experiences with a deep understanding of the ecosystems we explore.</p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl ml-4 ">
                        <div className="card-body ">
                            <h2 data-aos="fade-up" className="card-title text-xl font-semibold text-green-500">Community Impact</h2>
                            <p>By partnering with local communities, we ensure that your adventure supports the people and places you visit.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay="100"
                className='bg-slate-200 p-3 pt-20'>
                <div data-aos="slide-left" className="flex text-center justify-center items-center gap-4">
                    <h1 className='text-center text-3xl font-extrabold text-green-900'> Customers Review </h1>
                    <span className="text-5xl"><GoCodeReview /></span>

                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className='grid lg:grid-cols-3 grid-cols-1 gap-3 mt-10 pb-8'>

                    <div className="card bg-base-100 w-96 shadow-xl ml-4 ">
                        <div className="card-body ">
                            <p><i>"An unforgettable experience! The river kayaking was thrilling, and I learned so much about the local ecosystem. Highly recommended!"</i></p>
                            <h2 data-aos="fade-up" className="card-title text-xl font-semibold text-green-500"><i>Abdul Hakim</i></h2>
                            <p className='text-slate-400'>Malaysia</p>
                            <p className="flex text-yellow-500"> <FaStar /><FaStar /><FaStar /><FaStar /> <FaStar /></p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl ml-4 ">
                        <div className="card-body ">
                            <p className="pt-5"><i>"The forest hike was magical. I felt truly connected to nature, and the guide was so knowledgeable. This trip changed my life!"</i></p>
                            <h2 data-aos="fade-up" className="card-title text-xl font-semibold text-green-500"><i>Mr.Stark</i></h2>
                            <p className='text-slate-400'>London UK</p>
                            <p className="flex text-yellow-500"> <FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /> </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl ml-4 ">
                        <div className="card-body ">
                            <p className="pt-5"><i>"What a fantastic experience! The mountain climbing challenge was tough but rewarding, and the views were absolutely stunning."</i></p>
                            <h2 data-aos="fade-up" className="card-title text-xl font-semibold text-green-500"><i>MH.Seber</i></h2>
                            <p className='text-slate-400'>Bangladesh Dhaka</p>
                            <p className="flex text-yellow-500"> <FaStar /><FaStar /><FaStar /><IoIosStarHalf /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Details;