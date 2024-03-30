import { Link } from "react-router-dom"; 

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

import { arrow } from "../assets/icons";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Feihuan
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          specializing in React for front-end development, Next.js for seamless
          SSR, Three.js for 3D experiences, and gaining backend expertise.
        </p>
      </div>
      {/* ```````````````````````````````````````````````````` */}
      <hr className="border-slate-300 my-12" />
      {/* ``````````````````````````````````````````` */}
      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12 justify-center">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* `````````````````````````````````````````````````````````` */}
      <hr className="border-slate-300 my-12" />
      {/* `````````````````````````````````````````````` */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            From diverse roles, I've honed teamwork and problem-solving skills.
            My journey, marked by adaptability, converges into a passion for web
            development—a true reflection of my evolving professional self.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt="company-logo"
                      className="w-[60%] h-[60%] object-contain rounded-lg"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{
                  background: experience.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  {experience.link && (
                                  <div className="flex items-center gap-2">
                                  <Link
                                    to={experience.link} 
                                    target='_blank' 
                                    rel="noopener noreferrer" 
                                    className="font-semibold text-blue-600"
                                  >
                                    Project Link
                                  </Link> 
                                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                                </div>
                  )}
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`experience-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* ```````````````````````````````````````` */}
      <hr className="border-slate-300" />
      {/* ```````````````````````````````````````` */}

      <CTA />
    </section>
  );
};

export default About;
