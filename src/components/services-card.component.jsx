const ServiceCard = ({icon, title, text}) => {
    return(
        
        <div className="w-60 h-20 flex gap-3  ">
            <div className="flex-1 flex justify-center items-center">
                <img src= {icon} alt={title} className="h-4/5 w-auto " />
            </div>
            <div className="w-44 h-full flex flex-col justify-center ">
                <h2 className="font-bold">
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>

        </div>
    )
}

export default ServiceCard;