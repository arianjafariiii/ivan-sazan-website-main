import { Fragment } from "react";
import backgroundImage from '../assets/masjed3.JPG'; // Import your image

const ContactUS = () => {
    return(
        <Fragment>
            <div className="w-full min-h-[700px] relative">
                {/* Background Image with Opacity */}
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ 
                        backgroundImage: `url(${backgroundImage})`,
                        opacity: 0.3 // Adjust opacity (0.3 = 30%)
                    }}
                />
                
                {/* Dark Overlay (optional) */}
                <div className="absolute inset-0 bg-black/20 z-1"></div>
                
                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    {/* Page Title */}
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        تماس با ما
                    </h1>
                    
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">نام</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pyellow"
                                    placeholder="نام شما"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">ایمیل</label>
                                <input 
                                    type="email" 
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pyellow"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <label className="block text-gray-700 mb-2">پیام</label>
                            <textarea 
                                className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-pyellow"
                                placeholder="پیام شما..."
                            ></textarea>
                        </div>
                        
                        <button className="mt-6 bg-pyellow text-white py-3 px-6 rounded hover:bg-pyellow transition w-full md:w-auto">
                            ارسال پیام
                        </button>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2">آدرس</h3>
                            <p>شیراز، تاچارا، کوچه 11 </p>
                        </div>
                        <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2">تلفن</h3>
                            <p>09177169062</p>
                        </div>
                        <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2">ایمیل</h3>
                            <p>jafari.nader@example.com</p>
                        </div>
                        <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2">لینکدین</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactUS;