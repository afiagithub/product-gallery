import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

const Footer = () => {
    return (
        <footer className="mt-8 md:mt-10 lg:mt-16 py-5 md:py-8 lg:pt-0 lg:pb-10">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <a href="#" className="text-[#2D3663] font-bold text-2xl">
                                TechGallery
                            </a>

                            <p className="max-w-sm mt-2 text-gray-500 text-sm">
                                Join our community and stay connected for exclusive offers, new arrivals, 
                                and more. Shop with us for your tech trove.
                            </p>

                            <div className="flex mt-6 -mx-2 gap-5">
                                <a className="text-xl" data-tooltip-id="fb-page" data-tooltip-content="https://www.facebook.com/TechGallery"
                                    data-tooltip-place="bottom">
                                    <FaFacebookF />
                                </a>
                                <Tooltip id="fb-page" />

                                <a className="text-xl" data-tooltip-id="twitter-page" data-tooltip-content="https://www.twitter.com/TechGallery"
                                    data-tooltip-place="bottom">
                                    <FaTwitter />
                                </a>
                                <Tooltip id="twitter-page" />

                                <a className="text-xl" data-tooltip-id="instagram-page" data-tooltip-content="https://www.instagram.com/TechGallery"
                                    data-tooltip-place="bottom">
                                    <FaInstagram />
                                </a>
                                <Tooltip id="instagram-page" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-[#2D3663] uppercase font-bold">Pages</h3>
                                <a href="/" className="block mt-2 text-sm text-[#2D3663]  hover:underline">All Products</a>
                                <a href="/about" className="block mt-2 text-sm text-[#2D3663]  hover:underline">About</a>
                                <a href="/contact" className="block mt-2 text-sm text-[#2D3663]  hover:underline">Contact</a>
                            </div>

                            <div>
                                <h3 className="text-[#2D3663] uppercase font-bold">Company</h3>
                                <a href="#" className="block mt-2 text-sm text-[#2D3663]  hover:underline">Terms of use</a>
                                <a href="#" className="block mt-2 text-sm text-[#2D3663]  hover:underline">Privacy policy</a>
                                <a href="#" className="block mt-2 text-sm text-[#2D3663]  hover:underline">Cookie policy</a>
                            </div>

                            <div>
                                <h3 className="text-[#2D3663] uppercase font-bold">Contact</h3>
                                <span className="block mt-2 text-sm text-[#2D3663]  hover:underline">+1 234 567 999</span>
                                <span className="block mt-2 text-sm text-[#2D3663]  hover:underline">techgallery@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none" />

                <div>
                    <p className="text-center text-gray-500 ">© TechGallery 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;