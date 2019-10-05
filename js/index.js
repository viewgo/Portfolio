const navlinks = {
    "Hugo Oliveira": "#",
    "About Me": "#about",
    Skills: "#skills",
    Projects: "#projects",
    GitHub: "#github",
    Contact: "#contact"
};
const aboutme = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur!",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur!"
];

const projectsData = {
    nbacareer: {
        title: "NBA Career Predictor",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id incidunt vel aperiam dicta vero! Excepturi nostrum, animi autem et explicabo corporis similique ex ipsa aut voluptates dolorem amet velit non!",
        techstack: "Built using ...",
        deployurl: "https://nbacareer.netlify.com/",
        giturl: "https://github.com/NBA-Career-Longevity-Predictor/UI-UX",
        bullet1: "bullet1",
        bullet2: "bullet2",
        img: "img/nbacareer.jpg"
    }
};

const contactdata = [
    ["https://github.com/viewgo", "fab fa-github-square fa-2x"],
    ["https://www.facebook.com/viewgo", "fab fa-facebook-square fa-2x"],
    ["https://www.instagram.com/hugscity/", "fab fa-instagram fa-2x"],
    ["https://twitter.com/hugscity", "fab fa-twitter-square fa-2x"],
    ["http://www.linkedin.com/in/hugocoliveira", "fab fa-linkedin fa-2x"],
    ["mailto:oliveira.hugo.c@gmail.com", "fas fa-envelope-square fa-2x"]
];

//BACKGROUND CONTAINER
const bgContainer = document.querySelector(".bgContainer");

//CONTAINER
const container = document.createElement("div");
container.classList.add("container");
bgContainer.appendChild(container);

//TOP BAR
const topBar = document.createElement("div");
topBar.classList.add("topBar");
container.appendChild(topBar);

//NAV
const nav = document.createElement("nav");
topBar.appendChild(nav);

//NAV LINKS
Object.keys(navlinks).forEach(element => {
    const a = document.createElement("a");
    a.textContent = element;
    a.classList.add("anchor");
    a.href = navlinks[`${element}`];
    nav.appendChild(a);
});

//CONTENT
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);

//TITLE
const title = document.createElement("h1");
title.textContent = "Hugo Oliveira";
content.appendChild(title);

createAboutCard();
createSkillsCard();
createProjectsCard();
createGithubCard();
createContactCard();

function createAboutCard() {
    //ABOUT ME
    const aboutheader = document.createElement("h2");
    aboutheader.classList.add("anchor");
    aboutheader.textContent = "About Me";
    aboutheader.id = "about";
    content.appendChild(aboutheader);

    aboutme.forEach(element => {
        const about = document.createElement("div");
        about.classList.add("card");
        const p = document.createElement("p");
        about.appendChild(p);
        p.textContent = element;
        content.appendChild(about);
    });
}

function createSkillsCard() {
    const skillsheader = document.createElement("h2");
    skillsheader.classList.add("anchor");
    skillsheader.textContent = "Skills";
    skillsheader.id = "skills";
    content.appendChild(skillsheader);

    const skills = document.createElement("div");
    skills.classList.add("card");
    const p = document.createElement("p");
    skills.appendChild(p);
    p.textContent = "hello";
    content.appendChild(skills);
}

function createProjectsCard() {
    const projectsheader = document.createElement("h2");
    projectsheader.classList.add("anchor");
    projectsheader.textContent = "Projects";
    projectsheader.id = "projects";
    content.appendChild(projectsheader);

    Object.keys(projectsData).forEach(element => {

        const projects = document.createElement("div");
        projects.classList.add("card");

        const img = document.createElement("img");
        img.src = projectsData[`${element}`]["img"];
        projects.appendChild(img);
        img.style.width = "30%";
        img.style.marginRight = "5%";

        const projectscardholder = document.createElement("div");
        projectscardholder.classList.add("projectscardholder");
        projectscardholder.style.height = "100%";
        projects.appendChild(projectscardholder);

        const h3a = document.createElement("a");
        projectscardholder.appendChild(h3a);
        h3a.href = projectsData[`${element}`]["deployurl"];

        const h3 = document.createElement("h3");
        h3a.appendChild(h3);
        h3.textContent = projectsData[`${element}`]["title"];

        const descp = document.createElement("p");
        projectscardholder.appendChild(descp);
        descp.textContent = projectsData[`${element}`]["description"];
        descp.style.fontStyle = "italic";
        descp.style.marginBottom = "10px";

        const techstackp = document.createElement("p");
        projectscardholder.appendChild(techstackp);
        techstackp.style.marginBottom = "10px";
        techstackp.textContent = projectsData[`${element}`]["techstack"];

        

        const ul = document.createElement("ul");
        projectscardholder.appendChild(ul);
        ul.style.marginBottom = "10px";

        const li1 = document.createElement("li");
        ul.appendChild(li1);
        li1.textContent = projectsData[`${element}`]["bullet1"];

        const li2 = document.createElement("li");
        ul.appendChild(li2);
        li2.textContent = projectsData[`${element}`]["bullet2"];

        const deployurla = document.createElement("a");
        projectscardholder.appendChild(deployurla);
        deployurla.style.marginBottom = "10px";
        deployurla.href = projectsData[`${element}`]["giturl"];
        deployurla.textContent = "See it on GitHub";

        content.appendChild(projects);
    });

    // const projects = document.createElement("div");
    // projects.classList.add("card");
    // const p = document.createElement("p");
    // projects.appendChild(p);
    // p.textContent = "hello"
    // content.appendChild(projects);
}

function createGithubCard() {
    //GITHUB
    const githeader = document.createElement("h2");
    githeader.classList.add("anchor");
    githeader.textContent = "GitHub";
    githeader.id = "github";
    content.appendChild(githeader);

    function CardMaker(data, useCalendar) {
        const card = document.createElement("div"),
            holderDiv = document.createElement("div"),
            button = document.createElement("div"),
            calendarDiv = document.createElement("div"),
            img = document.createElement("img"),
            cardInfo = document.createElement("div"),
            // name = document.createElement("p"),
            username = document.createElement("p"),
            location = document.createElement("p"),
            profile = document.createElement("p"),
            a = document.createElement("a"),
            followers = document.createElement("p"),
            following = document.createElement("p"),
            bio = document.createElement("p");

        card.classList.add("gitcard");
        holderDiv.classList.add("holder");
        button.classList.add("expand-button");
        calendarDiv.classList.add("calendar");
        calendarDiv.classList.add("calendar-hidden");
        cardInfo.classList.add("card-info");
        // name.classList.add("name");
        username.classList.add("username");

        card.appendChild(holderDiv);
        card.appendChild(button);
        card.appendChild(calendarDiv);

        holderDiv.appendChild(img);
        holderDiv.appendChild(cardInfo);

        // cardInfo.appendChild(name);
        cardInfo.appendChild(username);
        cardInfo.appendChild(location);
        cardInfo.appendChild(profile);
        cardInfo.appendChild(followers);
        cardInfo.appendChild(following);
        cardInfo.appendChild(bio);

        const buttonText1 = "Show Contributions";
        const buttonText2 = "Hide Contributions";
        button.textContent = buttonText1;

        img.src = data.avatar_url;

        // (data.login !== null) ? name.textContent = data.name : name.style.display = "none";
        username.textContent = data.login;
        data.location !== null
            ? (location.textContent = "Location: " + data.location)
            : (location.style.display = "none");
        profile.textContent = "Profile: ";
        a.href = data.html_url;
        a.target = "_blank";
        a.textContent = data.html_url;
        followers.textContent = "Followers: " + data.followers;
        following.textContent = "Following: " + data.following;
        data.bio !== null ? (bio.textContent = "Bio: " + data.bio) : (bio.style.display = "none");

        button.addEventListener("click", event => {
            calendarDiv.classList.toggle("calendar-hidden");

            if (button.textContent === buttonText1) {
                button.textContent = buttonText2;
            } else {
                button.textContent = buttonText1;
            }
        });

        profile.appendChild(a);

        if (useCalendar) {
            const calendar = document.createElement("div");
            const calImg = document.createElement("img");
            calendar.appendChild(calImg);
            calendarDiv.appendChild(calendar);

            calImg.src = `http://ghchart.rshah.org/${data.login}`;
            calImg.style.width = "100%";
        } else {
            calendarDiv.style.display = "none";
        }

        return card;
    }

    axios.get("https://api.github.com/users/viewgo").then(response => {
        // console.log(response);
        const cards = document.querySelector(".cards");

        gitcardholder.appendChild(CardMaker(response.data, true));
        return response.data.followers_url;
    });

    const gitcardholder = document.createElement("div");
    gitcardholder.classList.add("gitcardholder");
    content.appendChild(gitcardholder);
}

function createContactCard() {
    //CONTACT HEADER
    const contactheader = document.createElement("h2");
    contactheader.classList.add("anchor");
    contactheader.textContent = "Contact";
    contactheader.id = "contact";
    content.appendChild(contactheader);

    const contact = document.createElement("div");
    contact.classList.add("card");
    content.appendChild(contact);

    //CONTACT LINKS
    contactdata.forEach(element => {
        const link = document.createElement("a");
        link.href = element[0];
        link.target = "_blank";
        contact.appendChild(link);
        const icon = document.createElement("i");
        icon.classList = element[1];
        link.appendChild(icon);
    });
}
