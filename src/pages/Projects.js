import React from "react";
import ProjectItem from "../components/ProjectItems";
import {ProjectList} from "../helpers/ProjectList"


import "../styles/Project.css"

function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Project</h1>
            <div className="projectList">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />
                })}
            </div>
        </div>
    )
}

export default Projects