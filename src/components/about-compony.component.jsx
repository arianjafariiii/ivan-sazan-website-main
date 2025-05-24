import { Fragment } from "react";
import AboutComponyCard from "./about-compony-card.component";

const AboutCompony = () => {
    return(
        <Fragment>
            <div className="w-full flex flex-col-reverse md:flex-row md: mb-28"> 
                {/* Left Section (Cards) - Stack vertically on mobile */}
                <div className="w-full md:w-2/5 bg-pyellow flex flex-col items-center justify-center py-8 gap-4 px-4 md:px-0">
                    <AboutComponyCard 
                        title={"تحویل به موقع پروژه ها"} 
                        text={"تعهد به زمانبندی از اصول اصلی ماست و تمام پروژه ها در موعد مقرر و با کیفیت مورد انتظار تحویل داده می‌شوند."}
                    />
                    <AboutComponyCard 
                        title={"کیفیت و دقت در اجرا"} 
                        text={"ما با رعایت بالاترین استاندارد های مهندسی و استفاده از مصالح مرغوب، پروژه هایی با دوام و کیفیت بالا ارائه می‌دهیم."}
                    />
                    <AboutComponyCard 
                        title={"تخصص و تجربه"} 
                        text={"تیم ما متشکل از مهندسان، معماران و کارشناسان با تجربه است که در تمامی مراحل پروژه، از طراحی تا اجرا، همراه شما خواهند بود."}
                    />
                </div>
                
                {/* Right Section - Full width on mobile */}
                <div className="w-full md:w-3/5 flex flex-col">
                    {/* Text Content */}
                    <div className="w-full h-auto md:h-5/6 bg-pgray flex flex-col justify-center p-6 md:px-28 gap-4">
                        <h2 className="text-xl md:text-2xl font-bold">
                            درباره ایوان سازان
                        </h2>
                        <div className="border-2 border-pyellow w-12"/>
                        <p className="text-xs text-ptext-gray">
                            ایوان سازان زرگان با پشتوانه‌ای از سال‌ها تجربه در عرصه ساخت‌وساز، پیش از تأسیس رسمی خود در سال ۱۳۸۲، فعالیت‌های عمرانی خود را به‌صورت شخص حقیقی و همچنین از طریق شرکت گرانیت شیراز آغاز کرده بود.
                            با تعهدی راسخ به دقت، کیفیت و تحویل به‌موقع، همواره تلاش کرده‌ایم تا فضاهایی ایمن، مدرن و کارآمد خلق کنیم که پاسخگوی نیازهای متنوع کارفرمایان باشد.
                            اعتماد و رضایت مشتریان، سرمایه‌ای ارزشمند برای ماست که با ارائه خدمات حرفه‌ای و بهره‌گیری از مصالح با کیفیت، همواره در حفظ و تقویت آن کوشیده‌ایم.
                            مایه افتخار ماست که در طول سال‌ها فعالیت—چه در قالب شخصی و چه به‌صورت شرکتی—پروژه‌های متعددی را با موفقیت اجرا کرده‌ایم و نقشی مؤثر در توسعه فضاهای اداری، آموزشی، مذهبی و درمانی ایفا نموده‌ایم.
                        </p>
                    </div>
                    
                    {/* Footer Section */}
                    <div className="h-20 md:h-1/6 w-full bg-pblack px-4 md:px-5 flex flex-col md:flex-row justify-between items-center py-2 md:py-0">
                        <div className="text-white font-bold text-sm md:text-lg mb-2 md:mb-0">
                            برای مشاوره باما تماس بگیرید.
                        </div>
                        <div className="border-2 md:border-4 border-pyellow px-3 md:px-5 py-1 text-pyellow text-sm md:text-base">
                            ارتباط با ما
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AboutCompony;