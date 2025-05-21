import { Fragment } from "react";
import ProjectPageCard from "../components/projects-page-card.component";
import sampleImage from '../assets/amoozesh1.jpg'
import { Key } from "lucide-react";
import { useEffect, useState } from "react";




const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects-data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data.projects);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="w-full min-h-96 flex items-center justify-center">
                <p>در حال بارگذاری پروژه‌ها...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-96 flex items-center justify-center">
                <p className="text-red-500">خطا در بارگذاری پروژه‌ها: {error}</p>
            </div>
        );
    }

    return(
        <Fragment>
            <div className=" w-full min-h-96  flex flex-col justify-center py-11 gap-3 mb-28 ">
                <h2 className="w-5/6 mr-14 h-16  border-b-2 border-pyellow  px-11 py-4 font-bold text-xl  ">
                    پروژه ها
                </h2>
                <div className=" w-11/12 bg-white flex flex-col items-center gap-7   md:grid md:grid-cols-4  flex-wrap px-11 py-11 ">
                    
                {projects.map((project) => (
                        <ProjectPageCard
                            key={project.id}
                            project={{
                                ...project, // Spread all project data
                                id: project.id // Ensure ID is passed for routing
                            }}           
                        />
                    ))}
                    {/* <ProjectPageCard 
                    project={{
                        title: "  خحفتفق قحلخ حثخقلثحقختل پروژه نمونه",
                        profileImage: sampleImage
                    }} 
                    />
                    <ProjectPageCard 
                    project={{
                        title: "پروژه نمونه",
                        profileImage: sampleImage
                    }} 
                    />
                    <ProjectPageCard 
                    project={{
                        title: "پروژه نمونه",
                        profileImage: sampleImage
                    }} 
                    />
                    <ProjectPageCard 
                    project={{
                        title: "پروژه نمونه",
                        profileImage: sampleImage
                    }} 
                    />
                    <ProjectPageCard 
                    project={{
                        title: "پروژه نمونه",
                        profileImage: sampleImage
                    }} 
                    /> */}
                </div>
                
            </div>

        </Fragment>

    );

}

export default Projects;