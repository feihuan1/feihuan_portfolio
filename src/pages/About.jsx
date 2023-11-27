import React from "react";

import { skills } from "../constants";

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
          specializing in React for front-end development, Next.js for seamless SSR,
          Three.js for 3D experiences, and gaining backend expertise.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div 
            className="block-container w-20 h-20"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div
                className="btn-front rounded-xl flex justify-center items-center"
              >
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

      <div className="py-16">
            <h3 className="subhead-text">
              Work Experience
            </h3>
            <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
        From diverse roles, I've honed teamwork and problem-solving skills. My journey, marked by adaptability, converges into a passion for web development—a true reflection of my evolving professional self.
        </p>
      </div>
      <div className="mt-12 flex">
              
      </div>
      </div>
    </section>
  );
};

export default About;
