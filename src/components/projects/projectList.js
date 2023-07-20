import React, { useState } from 'react';


//import images
import Tilottama from "../../img/Tilottama.png";
import ConnectVerse from "../../img/ConnectVerse.png";
import CheckItOff from "../../img/CheckItOff.png";

export default function ProjectList() {

    const [projects] = useState([
        {
            name: "Tilottama",
            image: Tilottama,
            button: "Tilottama"
        },
        {
            name: "CheckItOff",
            image: CheckItOff,
            button: "CheckItOff"
        },
        {
            name: "ConnectVerse",
            image: ConnectVerse,
            button: "ConnectVerse"
        }
    ]);


    function showModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "block";
        modal.style.display = "block";
    }

    function addbackground(image) {
        const style = {
            backgroundImage: `url(${image})`,
            backgroundSize:'contain'
            }
        return style;
    }

    return (
        <div className="row my-5 ">
            {
                projects.map((project, index) => {
                return(
                        <div className={"testbg col-12 col-sm-12 col-md-4 px-5 wow fadeIn"} key={index} style={addbackground(project.image)}>
                            <div className="overlay">
                                <div className="text">
                                    <h2>{project.name}</h2>
                                </div>
                                <div>
                                    <button id={project.button + "-button"} className="project-button" onClick={() => showModal(project.name)}>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                )})
            }
        </div>
    );
}