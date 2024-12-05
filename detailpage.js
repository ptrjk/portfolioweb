import { projects } from "./projects_data.js"

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

function generateProject() {
    const project = findProjectById(projectId)
    if (!project) return

    let link = ""
    if (project.link_type === "googleplay") {
        link = `
        <a href="https://play.google.com/store/apps/details?id=com.fitnessapp.deadlift">
            <div class="google-play" >
                <div class="row">
                    <img src="assets/googleplay.png" alt="google play download logo">
                </div>
                <div class="col">
                    <p style="font-size: 12px;">GET IT ON</p>
                    <p style="font-size: 20px;">Google Play</p>
                </div>
            </div >
        </a>
        `
    } else if (project.link_type === "git") {
        link = `
        <div class="row" style="gap:10px; margin-top:50px;">
            <a href="${project.url_link}">
                <div class="github">
                    <div class="row">
                        <img src="assets/gitlogo.png" alt="google play download logo">
                    </div>
                    <p>GitHub</p>
                </div>
            </a>
            ${project.url_link_preview ? `
                <a href="${project.url_link_preview}">
                    <div class="github">
                        <div class="row">
                            <img src="assets/play.png" alt="Preview logo">
                        </div>
                        <p>Preview</p>
                    </div>
                </a>` : ''}
        </div>
        `
    }

    const doc = document.querySelector(".project")
    doc.innerHTML = `
        <div class="img-background" style="background-color: ${project.backgroundColor};">
            <img src="assets/${project.image}.png" alt="project image" class="logo">
        </div>
        <div class="col">
            <h3>${project.title}</h3>
            <p style="font-size:20px;">${project.description}</p>
            ${link}
        </div>
        `

    const grid = document.querySelector(".project-details-grid")
    let query = ""
    project.content.forEach(element => {
        query += `
        <div class="project-details-item">
            ${element}
        </div>
        `
    });

    grid.innerHTML = query

}

function findProjectById(id) {
    let foundedProject = ""

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id == id) {
            foundedProject = projects[i]
        }
    }
    return foundedProject
}


generateProject()