import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";


const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Personal{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I've worked on many projects, and some are especially meaningful to
          me. Most of them open-source, so if anything catches your eye, please explore the
          code and contribute your ideas. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="project-icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex sm:flex-row flex-col justify-start gap-4 sm:gap-16"> 
              <div className="flex items-center gap-2">
                <Link
                  to={project.link} 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="font-semibold text-blue-600"
                >
                  Live Demo
                </Link> 
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={project.code} 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="font-semibold text-blue-600"
                >
                  Source Code
                </Link> 
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-300" /> 
      <CTA />
    </section>
  );
};

export default Projects;
