import { projects } from "./projects_data.js"

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

console.log("project id: " + projectId)

function generateProject() {
    const project = findProjectById(projectId)
    if (!project) return

    let link = ""
    if (project.link_type === "googleplay") {
        link = `
        <a href="https://www.google.com">
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
        <a href="${project.url_link}">
            <div class="github">
                <div class="row">
                    <img src="assets/gitlogo.png" alt="google play download logo">
                </div>
                <p>GitHub</p>
            </div>
        </a>
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


document.addEventListener("keydown", (e) => {
    if (e.key === 'e') {
        console.log("e")
    }
})