import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const TravelNews = () => {
    return (
        <div className='w-full h-10 p-2 mt-10 bg-green-500'>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">
                    Join Our Team | Make a Donation  Join Our Team | Make a Donation
                </Link>
                <Link to="/news">
                    Join Our Team | Make a Donation  Join Our Team | Make a Donation
                </Link>
                <Link to="/news">
                    Join Our Team | Make a Donation  Join Our Team | Make a Donation
                </Link>
            </Marquee>
        </div>
    );
};

export default TravelNews;