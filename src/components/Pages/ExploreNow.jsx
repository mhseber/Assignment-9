import { useEffect, useState } from "react";
import ExploreCard from "../Card/ExploreCard";

const ExploreNow = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('./TravelData.Json')
            .then(res => res.json())
            .then(data => setExplore(data))
    }, []);


    return (
        <div >
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-5 pl-10 ">
                {
                    explore.map(explore => <ExploreCard explore={explore} key={explore.id}></ExploreCard>)
                }
            </div>
        </div>
    );
};

export default ExploreNow;