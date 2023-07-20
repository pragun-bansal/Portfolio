import React, {useState} from "react";

//import images
import Tilottama from "../../img/Tilottama.png";
import ConnectVerse from "../../img/ConnectVerse.png";
import CheckItOff from "../../img/CheckItOff.png";


import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
        {
            name: "Tilottama",
            image: Tilottama,
            status: "View Live Demo",
            ref:"https://tilottama.netlify.app/",
            description: [
                "Prototype marine web-application to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS.",
                "ba;lasdjkpasj kl;djaslkjdl kasl;d l;asd ."
            ]
        },
        {
            name: "CheckItOff",
            image: CheckItOff,
            status: "View Live Demo",
            ref: "https://checkitoff-app.netlify.app/",
            description: [
                "Marine web-application to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        },
        {
            name: "ConnectVerse",
            image: ConnectVerse,
            status: "View Live Demo",
            ref: "https://connectverse.netlify.app/",
            description: [
                "YEAHHHH lication to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        }
    ]);


    function hiddeModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }


    return(
		<div id="gallery-card">
        {
            projects.map((project, index) => {
            return (
                <div id={project.name} className="modal-card" key={index}>
                    <div className="visual">
                        <img src={project.image} alt=""/>
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>

                        <HiddenModalDescription description={project.description} />

                        <div className="modal-bottom">
                            <a href={project.ref} target="_blank">
                                <h3>{project.status}</h3>
                            </a>
                            <p className="close-icon" style={style} onClick={() => hiddeModal(project.name)}>&#10005;</p>
                        </div>

                    </div>
                </div>
            );})
        }
        </div>
    );
}