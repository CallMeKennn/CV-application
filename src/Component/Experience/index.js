import React from "react";
import "./Experience.scss";
import { experience } from "../../Data/Data"
import ExperienceList from "../ExperienceList";

const Experience = () => {

    console.log(experience)
    return (
        <div className="experience"> 
            <h1>Experience</h1>
            <hr/>
            {experience.map((experience, index) => (
              <div className="experience" key={index}>
                <div className="experienceName">{experience.nameExperience}:</div>
                <ExperienceList toggle={experience.toggle}/>
              </div>
            ))}
        </div>
    );
};


export default Experience;
