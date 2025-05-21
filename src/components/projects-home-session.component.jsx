import { Fragment, useState, useEffect } from "react";
import ProjectCard from "./project-card.component";
import { Link } from "react-router-dom";

const ProjectsHomeSession = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects data
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects-data.json');
                const data = await response.json();
                // Get first 3 projects
                const firstThreeProjects = data.projects.slice(0, 3);
                setProjects(firstThreeProjects);
            } catch (error) {
                console.error("Error loading projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Fragment>
            <div className="w-full min-h-[500px] md:h-[600px] flex flex-col items-center py-6 md:py-10 relative gap-6 md:gap-8 px-4 mb-28">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                    برخی پروژه ها
                </h2>
                
                <div className="w-full flex flex-col items-center md:flex-row gap-6 md:gap-11 justify-center  overflow-x-auto pb-4 md:pb-0">
                    {/* Project Cards - Stack vertically on mobile */}
                    <div className="w-full md:w-auto flex flex-col items-center md:flex-row gap-6 md:gap-11">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            id={project.id}  // Pass the project ID
                            title={project.title}
                            description={project.description}
                            image={project.profileImage}
                        />
                    ))}
                    </div>
                </div>
                
                <Link to="/projects" className="py-2 md:py-3 px-6 md:px-10 bg-pyellow md:absolute md:bottom-6 mt-4 md:mt-0">
                    همه‌ی پروژه ها
                </Link>
            </div>
        </Fragment>
    );
};

export default ProjectsHomeSession;