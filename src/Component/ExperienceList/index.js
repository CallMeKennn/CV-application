import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faSolidCircle } from "@fortawesome/free-solid-svg-icons";
import "./ExperienceList.scss"

const ExperienceList = ({ toggle }) => {
    const createDivs = (toggle) => {
        const divs = [];
        for (let i = 0; i < 5; i++) {
            if (i < toggle) {
                divs.push(<div className="icon"><FontAwesomeIcon size="lg" icon={faSolidCircle} /></div>);
            } else {
                divs.push(<div className="icon"><FontAwesomeIcon size="lg" icon={faCircle} /></div>);
            }
        }
        return divs;
    };

    return <div className="icons">{createDivs(toggle)}</div>;
};

export default ExperienceList;
