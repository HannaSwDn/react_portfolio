import React, { Component } from "react"
import ProjectCard from "./ProjectCard"
import axios from "axios"

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    render() {
        const projects = this.state.projects
        let projectsList 

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id}>
                        <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <ProjectCard project={project} />
                        </div>
                    </div>
                )
            })
        }


        return (
            <div>
                <h1 className="text-black montserrat uppercase">My Projects</h1>
                {projectsList}
            </div>
        )
    }
};

export default Projects