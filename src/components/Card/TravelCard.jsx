import { MdTravelExplore } from "react-icons/md";
import { Link, } from "react-router-dom";


const TravelCard = ({ travel }) => {
    const { title, image, ecoFriendlyFeatures } = travel;




    return (
        <div className="card bg-base-100 w-96 shadow-xl shadow-green-700">
            <figure className="">
                <img
                    className=" p-4 rounded-3xl w-full h-[276px] object-cover"
                    src={image}
                    alt="Travel" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-green-800 text-2xl font-bold">{title}</h2>
                <ul className="font-bold text-gray-400">
                    {ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <div className="  card-actions justify-end">
                    <Link to="exploreNow"
                        className=" btn w-42 bg-gradient-to-r from-green-600 to-green-900 text-white font-semibold ">Explore Now <MdTravelExplore /></Link>
                </div>

            </div>
        </div>
    );
};

export default TravelCard;