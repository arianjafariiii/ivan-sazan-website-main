import leftFlash from '../assets/left-flash.svg'

const AboutComponyCard = ({text, title}) => {
    return(
        <div className="w-80 h-28  flex gap-5 ">
            <div className=''>
                <img src={leftFlash} alt="Flash" className='h-6 w-auto' />
            </div>
            <div className='flex-1 text-xs flex flex-col py-2 gap-5'>
                <h2 className='font-bold'>
                    {title}
                </h2>
                <p className=''>
                    {text}
                </p>
            </div>

        </div>
    )
}

export default AboutComponyCard;