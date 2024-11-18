import mountain from "../../src/assets/mountain.avif"
import ocean from "../../src/assets/ocean.jpg"
import forest from "../../src/assets/forest.webp"
import { useState } from "react";
import { useEffect } from "react";
import TravelCard from "./Card/TravelCard";

const Hero = () => {
    const [travel, setTravel] = useState([]);
    useEffect(() => {
        fetch('./TravelData.Json')
            .then(res => res.json())
            .then(data => setTravel(data))
    }, []);
    return (

        <div>
            {/* Carousel */}
            <div className="flex justify-center items-center">
                <div className="carousel w-[1000px] h-[400px] rounded-xl ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={mountain}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={ocean}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={forest}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
            <h1 className="text-4xl font-bold text-center text-green-800 pt-8 my-6">Explore the World's Best Eco-Adventure Experiences</h1>
            <p className=" font-bold text-center text-gray-400 my-6">Embark on unforgettable eco-adventures, from mountain treks and ocean <br /> dives to wildlife safaris and forest expeditions, connecting with nature.</p>
            {/* card */}
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 pl-10 ">
                {
                    travel.map(travel => <TravelCard travel={travel} key={travel.id}></TravelCard>)
                }
            </div>
        </div>
    );
};

export default Hero;