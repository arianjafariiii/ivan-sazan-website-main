import AboutCompony from "../components/about-compony.component";
import Appreciation from "../components/appreciation-home-session.component";
import Footer from "../components/footer-home.component";
import Header from "../components/home-header.component";
import HomeServices from "../components/home-services.component";
import ProjectsHomeSession from "../components/projects-home-session.component";

const Home = () => {
    return(
        <div className="w-full">
            <Header/>
            <div className="hidden md:block">  {/* This will hide on mobile and show on medium screens and up */}
                <HomeServices/>
            </div>
            <AboutCompony/>
            <ProjectsHomeSession/>
            <Appreciation/>
            
            
        </div>
    )
}

export default Home;