import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch('/projects-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const data = await response.json();
        const foundProject = data.projects.find(p => p.id === parseInt(projectId));
        setProject(foundProject);
      } catch (error) {
        console.error("Error loading project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectId]);

  if (loading) {
    return <div className="container mx-auto py-8 px-4">در حال بارگذاری...</div>;
  }

  if (!project) {
    return <div className="container mx-auto py-8 px-4">پروژه یافت نشد</div>;
  }

  const allImages = [project.profileImage, ...project.images];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
        prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
        prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-4">جزئیات پروژه</h2>
            <p className="mb-2"><strong>لوکیشن:</strong> {project.location}</p>
            <p className="mb-2"><strong>متراژ:</strong> {project.meterage} m²</p>
            <p className="mb-2"><strong>ارزش پروژه:</strong> {project.valuation}</p>
            <p className="mb-2"><strong>وضعیت:</strong> {project.isCompleted ? 'تکمیل شده' : 'در حال انجام'}</p>
            <p className="mb-2"><strong>تاریخ شروع:</strong> {project.startDate}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">توضیحات</h2>
            <p>{project.description}</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img 
              src={allImages[currentImageIndex]} 
              alt={project.title} 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="relative mt-4">
            <div className="flex overflow-x-auto space-x-2 py-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded border-2 ${
                    currentImageIndex === index 
                      ? 'border-blue-500' 
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`تصویر ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;