import { Fragment } from "react";
import painting from '../assets/painting.svg';
import demolition from '../assets/demolition.svg';
import foundation from '../assets/foundation.svg';
import repairs from '../assets/repairs.svg';
import building from '../assets/construction.svg'
import managment from '../assets/management.svg'

import ServiceCard from "./services-card.component";

const HomeServices =  () => {
    return(
        <Fragment>
            <div className="h-64 w-full flex items-center justify-center ">
                <div className="w-5/6 h-48 grid grid-cols-3  whitespace-normal break-words gap-9 text-xs ">
                    <ServiceCard title={" پروژه های اداری"} text={"احداث ساختمان های اداری با طراحی مدرن و کاربری بهینه"} icon={painting} />
                    <ServiceCard title={" نظارت پروژه"} text={"نظارت فنی و اجرایی بر کلیه مراحل ساخت و ساز"} icon={demolition} />
                    <ServiceCard title={" برنامه ریزی"} text={"برنامه ریزی و کنترل پروژه برای تحویل پروژه"} icon={foundation} />
                    <ServiceCard title={" سیستم های تاسیساتی"} text={"اجرای سیستم های تاسیساتی(برق، مکانیک و تهویه مطبوع)"} icon={repairs} />
                    <ServiceCard title={"  مراکز آموزشی"} text={"ساخت مدارس و مراکز آموزشی مطابق با استاندارد های آموزشی"} icon={building} />
                    <ServiceCard title={"مراکز درمانی"} text={" احداث مراکز درمانی و بیمارستان ها با رعایت الزامات بهداشتی و درمانی"} icon={managment} />
                </div>
            </div>
            
        </Fragment>
    )
}


export default HomeServices;