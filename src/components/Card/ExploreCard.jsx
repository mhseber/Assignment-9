import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExploreCard = ({ explore }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    const { image,
        categoryName,
        shortDescription,
        adventureCost,
        location,
        duration,
        adventureLevel,
        includedItems,
        maxGroupSize,
        specialInstructions } = explore
    return (
        <div className="bg-slate-100 p-6">
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="card bg-base-100 lg:w-[600px] shadow-xl">
                <figure
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="px-10 pt-10">
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        src={image}
                        alt="travel"
                        className="rounded-xl h-[276px] object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-extrabold text-green-900" data-aos="fade-up">{categoryName}</h2>
                    <p className="font-semibold text-gray-500" data-aos="slide-right"><i>{shortDescription}</i></p>
                    <ul className="text-start text-green-600" data-aos="slide-left">
                        <li>Cost: {adventureCost}</li>
                        <li>Map: {location}</li>
                        <li>Time: {duration}</li>
                        <li>Level: {adventureLevel}</li>
                        <li>Team: {maxGroupSize}</li>
                    </ul>
                    <p className="border border-dashed  border-gray-500 w-[400px]"></p>
                    <div className="flex gap-20 pt-5">
                        <ul className="font-bold text-gray-400" data-aos="slide-left">
                            <span className="text-black text-xl font-semibold">includedItems !</span>
                            {includedItems.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <ul className="font-bold text-gray-400" data-aos="slide-left">
                            <span className="text-black text-xl font-semibold">specialInstructions !</span>
                            {specialInstructions.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCard;