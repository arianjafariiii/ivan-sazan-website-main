import { Fragment } from "react";
import location from '../assets/Subtract.svg';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';
import instagram from '../assets/icons8-instagram.svg';
import whatsapp from '../assets/icons8-whatsapp.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import { Outlet } from "react-router-dom";

const Footer = () => {
    return(
        <Fragment>
            <Outlet/>
            <div className="w-full flex flex-col-reverse md:flex-row min-h-[400px] md:min-h-[180px]"> {/* Reduced min-height */}
                {/* Contact Form Section */}
                <div className="bg-pyellow w-full md:w-2/4 p-4 md:p-6 flex justify-center"> {/* Reduced padding */}
                    <div className="w-full md:w-5/6 flex flex-col gap-3"> {/* Reduced gap */}
                        <h3 className="text-base md:text-lg font-bold"> {/* Smaller text */}
                            برای مشاوره و ارتباط با ما:
                        </h3>
                        <div className="border-b-4 border-black w-12" /> {/* Smaller line */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-3"> {/* Reduced gap */}
                            <input 
                                type="text" 
                                className="w-full md:w-5/12 border-none h-7 p-1 text-sm focus:outline-none" /* Smaller height and text */
                                placeholder="نام" 
                            />
                            <input 
                                type="text" 
                                className="w-full md:w-5/12 h-7 border-none p-1 text-sm focus:outline-none" /* Smaller height and text */
                                placeholder="شماره تماس" 
                            />
                            <textarea 
                                className="w-full border-none p-1 h-20 text-sm focus:outline-none" /* Smaller height and text */
                                placeholder="پیام شما" 
                            />
                        </div>
                        <button className="self-end px-4 py-1 text-xs border border-white text-white bg-transparent hover:bg-white hover:text-pyellow transition-colors duration-300"> {/* Smaller padding */}
                            ارسال پیام
                        </button>
                    </div>
                </div>
                    
                {/* Info Section */}
                <div className="w-full md:w-2/4 flex flex-col">
                    {/* Social Media */}
                    <div className="h-12 md:h-16 w-full bg-pblack flex justify-center items-center gap-4 md:gap-8 px-4"> {/* Reduced height and gap */}
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <img src={instagram} alt="instagram" className="w-5" /> {/* Smaller icon */}
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <img src={whatsapp} alt="whatsapp" className="w-5" /> {/* Smaller icon */}
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <img src={linkedin} alt="linkedin" className="w-5" /> {/* Smaller icon */}
                        </a>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="flex-1 py-4 md:py-4 flex justify-center items-center bg-white"> {/* Reduced padding */}
                        <div className="text-xs flex flex-col w-11/12 md:w-9/12 font-bold gap-2 md:gap-3"> {/* Smaller text and gap */}
                            <div className="flex gap-2 items-center">
                                <img src={location} alt="location" className="w-4" /> {/* Smaller icon */}
                                <p className="text-gray-800">
                                    شیراز - تاچارا - کوچه 11
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={phone} alt="call" className="w-4" /> {/* Smaller icon */}
                                <p className="text-gray-800">
                                    09177169062 - 09177049591
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={mail} alt="Email" className="w-4"/> {/* Smaller icon */}
                                <p className="text-gray-800">
                                    jafari.nader2233@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;