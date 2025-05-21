import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProjectPageCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <div className="relative w-64 h-64 aspect-square  overflow-hidden   rounded-lg shadow-md group cursor-pointer">
        {/* Default Project Image */}
        <img 
          src={process.env.PUBLIC_URL + project.profileImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
        
        {/* Hover Overlay with Title */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <h3 className="text-white text-lg font-bold text-center border-b-2">
            {project.title}
          </h3>
        </div>
      </div>
      </Link>
  );
};

export default ProjectPageCard;