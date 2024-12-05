import { projects } from "./projects_data.js"


function generateProjects() {
    const doc = document.getElementsByClassName("projects-list")
    const otherDoc = document.getElementsByClassName("other-projects-grid")
    let query = ""
    let otherProjectsQuery = ""

    projects.map((project, index) => {
        let projectQuery
        if (index <= 2) {
            projectQuery = `
            <a href="detailpage.html?id=${project.id}">
                <div class="project popUp">
                    <div class="img-background" style="background-color: ${project.backgroundColor};">
                        <img src="assets/${project.image}.png" alt="project image" class="logo">
                    </div>
                    <div class="col">
                        <h3>${project.title}</h3>
                        <p class="description">${project.description}</p>
                        <p style="margin: 30px 0; color:yellow; opacity: 0.7;">Click here for more information</p>
                    </div>
                </div >
            </a >
            `
            query += projectQuery
        } else {
            projectQuery = `
            <a href="detailpage.html?id=${project.id}">
                <div class="item2 popUp">
                    <div class="img-placeholder">
                        <img src="assets/${project.image}.png" alt="project image">
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </a>
            `
            otherProjectsQuery += projectQuery
        }
    })
    doc[0].innerHTML = query
    otherDoc[0].innerHTML = otherProjectsQuery
}



generateProjects()

const button = document.querySelector(".contact-button")
const contact_section = document.querySelector(".contact-section")

button.addEventListener("click", () => {
    contact_section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});