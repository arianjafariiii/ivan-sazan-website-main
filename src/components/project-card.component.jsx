import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, description, id }) => {
    return (
        <div className="w-11/12 md:w-80 h-96 flex flex-col gap-4 relative overflow-hidden">
            <div 
                className="w-full h-36 bg-cover bg-center z-0 overflow-hidden" 
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="flex-1 gap-6 flex-col w-full border-2 border-ptext-gray py-8 px-5 relative">
                <h3 className="text-sm font-bold absolute top-3">
                    {title}
                </h3>
                <div className="absolute top-12 h-24 w-[calc(100%-2.5rem)] overflow-hidden">
                    <p className="text-ptext-gray text-justify h-full w-full relative">
                        {description}
                        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
                    </p>
                </div>
                <Link 
                    to={`/projects/${id}`}  // Link to project details page
                    className="border-2 w-24 border-ptext-gray px-3 py-1 text-xs absolute bottom-3 hover:bg-gray-100 transition-colors"
                >
                    جزئیات بیشتر
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;