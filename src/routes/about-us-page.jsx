import { Fragment } from "react";
import backImage from "../assets/masjed2.JPG";
import CoWorkingItem from "../components/co-working-item.component";

const AboutUS = () => {
    return (
        <Fragment>
            <div className="w-full mb-8 md:mb-16">
                {/* First Section */}
                <div className="w-full flex flex-col md:flex-row mb-8 md:mb-16 mt-8 md:mt-16">
                    {/* Image Section - Mobile: Full width, Desktop: 1/3 width */}
                    <div 
                        className="w-full md:w-1/3 h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat order-1"
                        style={{ backgroundImage: `url(${backImage})` }}
                    >
                        <div className="w-full h-full inset-0 bg-black bg-opacity-40"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 px-4 md:px-8 py-4 md:py-8 order-2">
                        <div className="flex flex-col w-full h-full">
                            <div className="h-auto md:h-5/6 w-full bg-pgray text-xl md:text-3xl font-bold flex flex-col gap-4 md:gap-6 px-4 md:px-8 py-4 md:py-8">
                                <h2>ایوان سازان زرگان</h2>
                                <div className="border-b-4 w-16 md:w-20 border-pyellow" />
                                <div className="flex flex-col gap-4 md:gap-12 text-ptext-gray text-xs md:text-sm leading-relaxed">
                                    <p className="w-full md:w-5/6 text-justify">
                                        ایوان سازان زرگان با پشتوانه‌ای از سال‌ها تجربه در عرصه ساخت‌وساز، پیش از تأسیس رسمی خود در سال ۱۳۸۲، فعالیت‌های عمرانی خود را به‌صورت شخص حقیقی و همچنین از طریق شرکت گرانیت شیراز آغاز کرده بود.
                                        با تعهدی راسخ به دقت، کیفیت و تحویل به‌موقع، همواره تلاش کرده‌ایم تا فضاهایی ایمن، مدرن و کارآمد خلق کنیم که پاسخگوی نیازهای متنوع کارفرمایان باشد.
                                    </p>
                                    <p className="w-full md:w-5/6 text-justify">
                                        شرکت ایوان سازان زرگان با سال‌ها تجربه در صنعت ساخت‌وساز، به عنوان یکی از شرکت‌های معتبر و پیشرو در زمینه نوسازی، بازسازی، ساخت ساختمان‌های اداری، مراکز درمانی و پروژه‌های مسکونی فعالیت دارد.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Stats Section */}
                            <div className="flex flex-col md:flex-row mt-4">
                                <div className="w-full md:w-1/2 bg-pyellow px-3 py-2 md:px-4 md:py-2 flex items-center justify-center md:justify-start" dir="rtl">
                                    <span className="text-3xl md:text-5xl font-bold mx-1">30</span>
                                    <span className="text-sm md:text-base">سال تجربه</span>
                                </div>
                                <div className="w-full md:w-1/2 bg-pblack px-3 py-2 md:px-4 md:py-2 flex items-center justify-center md:justify-start text-white" dir="rtl">
                                    <span className="text-3xl md:text-5xl font-bold mx-1">50</span>
                                    <span className="text-sm md:text-base">پروژه‌ی موفق</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="w-full flex flex-col md:flex-row">
                    {/* Content Section - Mobile: First, Desktop: First */}
                    <div className="flex-1 px-4 md:px-8 py-4 md:py-8 order-2 md:order-1">
                        <div className="flex flex-col w-full h-full">
                            <div className="h-auto md:h-5/6 w-full bg-pgray text-xl md:text-3xl font-bold flex flex-col gap-4 md:gap-6 px-4 md:px-8 py-4 md:py-8">
                                <h2>همکاری با ایوان سازان</h2>
                                <div className="border-b-4 w-16 md:w-20 border-pyellow" />
                                <div className="flex flex-col gap-3 md:gap-4 text-ptext-gray text-xs md:text-sm leading-relaxed">
                                    <CoWorkingItem 
                                        title="تحویل به‌موقع پروژه‌ها" 
                                        text="تعهد به زمان‌بندی از اصول اصلی ماست و تمامی پروژه‌ها در موعد مقرر و با کیفیت مورد انتظار تحویل داده می‌شوند." 
                                    />
                                    <CoWorkingItem 
                                        title="کیفیت و دقت در اجرا" 
                                        text="ما با رعایت بالاترین استانداردهای مهندسی و استفاده از مصالح مرغوب، پروژه‌هایی با دوام و کیفیت بالا ارائه می‌دهیم." 
                                    />
                                    <CoWorkingItem 
                                        title="تخصص و تجربه" 
                                        text="تیم ما متشکل از مهندسان، معماران و کارشناسان باتجربه است که در تمامی مراحل پروژه، از طراحی تا اجرا، همراه شما خواهند بود." 
                                    />
                                </div>
                            </div>
                            
                            {/* Stats Section */}
                            <div className="flex flex-col md:flex-row mt-4">
                                <div className="w-full md:w-1/2 bg-pyellow px-3 py-2 md:px-4 md:py-2 flex items-center justify-center md:justify-start" dir="rtl">
                                    <span className="text-3xl md:text-5xl font-bold mx-1">30</span>
                                    <span className="text-sm md:text-base">سال تجربه</span>
                                </div>
                                <div className="w-full md:w-1/2 bg-pblack px-3 py-2 md:px-4 md:py-2 flex items-center justify-center md:justify-start text-white" dir="rtl">
                                    <span className="text-3xl md:text-5xl font-bold mx-1">50</span>
                                    <span className="text-sm md:text-base">پروژه‌ی موفق</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Section - Mobile: Full width, Desktop: 1/3 width */}
                    <div 
                        className="w-full md:w-1/3 h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat order-1 md:order-2"
                        style={{ backgroundImage: `url(${backImage})` }}
                    >
                        <div className="w-full h-full inset-0 bg-black bg-opacity-40"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutUS;