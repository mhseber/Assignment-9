import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import TravelNews from "./Marquee/TravelNews";




const Footer = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto mb-7'>
                <TravelNews></TravelNews>
            </section>
            <footer className=" bg-gray-800 text-gray-300 py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
                        <p>
                            We are committed to delivering high-quality services and products. Stay connected
                            and discover more with us!
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul>
                            <li>
                                <a className="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a className="hover:underline">Services</a>
                            </li>
                            <li>
                                <a className="hover:underline">Contact Us</a>
                            </li>
                            <li>
                                <a className="hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                    © 2024 Your Company Name. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;