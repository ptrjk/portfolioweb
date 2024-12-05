export const projects = [
    {
        title: "Deadlift",
        description: `Deadlift is a fitness application for Android devices, the main purpose of this app is to track workouts and calorie intake. I developed this app using Flutter, it is also available on Google Play. I developed this project during the summer holidays, and it subsequently became my bachelor's thesis, where I tried to improve it even more.
<br><br>
All data in the application is stored in an SQL database. With an intuitive interface, Deadlift is designed to be user- friendly and effective for anyone, from beginners to seasoned fitness enthusiasts.
<br><br>
This project not only enhanced my Flutter development skills but also gave me valuable experience in managing data and integrating it within a mobile application.
`,
        image: "deadlift/deadlift",
        backgroundColor: "transparent",
        content: [
            `<img src="assets/deadlift/screenshot1.jpeg", alt="photo of project">`,
            `<img src="assets/deadlift/screenshot2.jpeg", alt="photo of project">`,
            `<img src="assets/deadlift/screenshot3.jpeg", alt="photo of project">`,
            `<img src="assets/deadlift/screenshot4.jpeg", alt="photo of project">`,
            `<img src="assets/deadlift/screenshot5.jpeg", alt="photo of project">`
        ],
        link_type: "googleplay",
        id: 1
    },
    {
        title: "Ecommerce Project",
        description: `
        This project consists of three main components: a webpage for customers, webpage for admin (store owner), and a backend server.
<br><br>
The backend is built with Node.js and Express.js, while the frontend is developed using React. The project uses an SQL database to manage product listings, orders, and customer information. Admin users have the ability to add, edit, and delete products, making the platform highly customizable for store owners.
<br><br>
Throughout this project, I gained hands-on experience with various web development technologies. I implemented JWT tokens for secure authentication, worked with CORS policies to manage cross-origin requests, and learned how to handle file uploads. This project significantly improved my skills in full-stack development.
`,
        image: "computer",
        backgroundColor: "aliceblue",
        content: [],
        link_type: "git",
        url_link: "https://github.com/ptrjk/ecommercePlatform/tree/main",
        id: 2
    },
    {
        title: "InterviewBuddy",
        description: `
        InterviewBuddy is a team project from "Zive IT Projekty", where we are creating an AI-powered assistant for HR department. The tool is designed to generate valuable and relevant interview questions based on the role and candidate profile.
<br><br>
As part of a 5-member team, my main role was UI design and frontend implementation. I worked on creating a user-friendly and visually appealing interface, ensuring that the application was intuitive for both HR professionals and candidates. The project allowed me to enhance my skills in frontend development while collaborating with a multidisciplinary team to deliver a functional and innovative solution for the hiring process.
`,
        image: "computer",
        backgroundColor: "aliceblue",
        content: [
            `
            <video controls>
                <source src="assets/interviewbuddy.mp4" type="video/mp4">
            </video>
            `
        ],
        link_type: null,
        id: 3
    },
    {
        title: "Game",
        description: `
        This is a game I’m currently working on, as a personal challenge to improve my development skills. I’m building the game entirely from scratch, using only JavaScript and the canvas API—no external libraries. The goal is to create a fully functional game that’s simple yet engaging.
<br><br>
The player can interact with the world, manage an inventory system, and chop trees. One of the key features is the working collision detection system, ensuring a smooth and realistic interaction between the player and the environment. As I continue to develop the game, I’m focusing on creating a unique gameplay experience, handling everything from mechanics to visual design on my own.
<br><br>
*Graphics of game isnt mine. I downloaded a free assets. (I am not good at drawing..)
`,
        image: "game",
        backgroundColor: "aliceblue",
        content: [
            `
            <video controls>
                <source src="assets/game.mp4" type="video/mp4">
            </video>
            `
        ],
        link_type: "git",
        url_link: "https://github.com/ptrjk/hra",
        id: 4
    },
    {
        title: "Nail Salon website",
        description: `
        This project is a single-page website designed for my mom’s nail salon. Built using JavaScript, CSS, and HTML.
        <br><br>
        This project served as an opportunity to refine my CSS styling skills, experimenting with layout techniques, color schemes, and responsive design to ensure the site looks great on all devices.`,
        image: "nailsalon",
        backgroundColor: "aliceblue",
        content: [
            `
            <video controls>
                <source src="assets/nechty.mp4" type="video/mp4">
            </video>
            `
        ],
        link_type: "git",
        url_link: "https://github.com/ptrjk/nailsweb",
        url_link_preview: "https://ptrjk.github.io/nailsweb/",
        id: 5
    },
    {
        title: "Simple Note App",
        description: "This project is a basic note-taking application built using JavaScript, HTML, and CSS. It allows users to create, view, edit, and delete notes. The focus of this project was to practice fundamental JavaScript skills.",
        image: "noteapp",
        backgroundColor: "aliceblue",
        content: [`<img src="assets/noteapp.png", alt="photo of project">`],
        link_type: "git",
        url_link: "https://github.com/ptrjk/noteapp",
        url_link_preview: "https://ptrjk.github.io/noteapp/",
        id: 6
    }
]