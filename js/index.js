const navlinks = {
    "Hugo Oliveira": "#",
    "About Me": "#about",
    "Skills": "#skills",
    "Projects": "#projects",
    "GitHub": "#github",
    "Contact": "#contact"
};
const aboutme = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur!",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius sit, voluptatibus animi ratione officia id consequuntur harum soluta nostrum quae, nesciunt praesentium assumenda aliquid. Excepturi voluptatem quisquam sapiente animi.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae at nemo ipsa labore, saepe vero voluptatibus laudantium fuga amet deleniti eaque aliquid. Ratione maxime explicabo natus, sapiente quo consequatur!",
]



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
    a.href = navlinks[`${element}`]
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



//ABOUT ME
const aboutheader = document.createElement("h2");
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
})




//GITHUB
const githeader = document.createElement("h2");
githeader.textContent = "GitHub";
githeader.id = "github";
content.appendChild(githeader);


function CardMaker(data, useCalendar) {
    const 
        card = document.createElement("div"),
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
    (data.location !== null) ? location.textContent = "Location: " + data.location : location.style.display = "none";
    profile.textContent = "Profile: ";
    a.href = data.html_url;
    a.target = "_blank";
    a.textContent = data.html_url;
    followers.textContent = "Followers: " + data.followers;
    following.textContent = "Following: " + data.following;
    (data.bio !== null) ? bio.textContent = "Bio: " + data.bio : bio.style.display = "none";

    button.addEventListener("click", event =>{
        calendarDiv.classList.toggle("calendar-hidden")
        
        if(button.textContent === buttonText1){
            button.textContent = buttonText2;
        }
        else{
            button.textContent = buttonText1;
        }
    });

    profile.appendChild(a);

    if(useCalendar){
        const calendar = document.createElement("div");
        const calImg = document.createElement("img");
        calendar.appendChild(calImg);
        calendarDiv.appendChild(calendar);

        calImg.src = `http://ghchart.rshah.org/${data.login}`;
        calImg.style.width = "100%";
    }
    else{
        calendarDiv.style.display = "none";
    }

    return card;
}

//GITHUB API CALL
axios
    .get("https://api.github.com/users/viewgo")
    .then(response => {
        console.log(response);
        const cards = document.querySelector(".cards");
        
        gitcardholder.appendChild(CardMaker(response.data, true));
        return response.data.followers_url;
    })

const gitcardholder = document.createElement("div");
gitcardholder.classList.add("gitcardholder");
content.appendChild(gitcardholder);


//CONTACT
const contactheader = document.createElement("h2");
contactheader.textContent = "Contact";
contactheader.id = "contact";
content.appendChild(contactheader);

const contact = document.createElement("div");
contact.classList.add("card");
content.appendChild(contact);

//CONTACT LINKS
const githublink = document.createElement("a");
contact.appendChild(githublink);
const githubicon = document.createElement("i");
githubicon.classList = "fab fa-github-square fa-2x";
console.log(githubicon);
githublink.appendChild(githubicon);

const facebooklink = document.createElement("a");
contact.appendChild(facebooklink);
const facebookicon = document.createElement("i");
facebookicon.classList = "fab fa-facebook-square fa-2x";
console.log(facebookicon);
facebooklink.appendChild(facebookicon);

const instalink = document.createElement("a");
contact.appendChild(instalink);
const instaicon = document.createElement("i");
instaicon.classList = "fab fa-instagram fa-2x";
console.log(instaicon);
instalink.appendChild(instaicon);

const twitterlink = document.createElement("a");
contact.appendChild(twitterlink);
const twittericon = document.createElement("i");
twittericon.classList = "fab fa-twitter-square fa-2x";
console.log(twittericon);
twitterlink.appendChild(twittericon);

const linkedinlink = document.createElement("a");
contact.appendChild(linkedinlink);
const linkedinicon = document.createElement("i");
linkedinicon.classList = "fab fa-linkedin fa-2x";
console.log(linkedinicon);
linkedinlink.appendChild(linkedinicon);

const emaillink = document.createElement("a");
contact.appendChild(emaillink);
const emailicon = document.createElement("i");
emailicon.classList = "fas fa-envelope-square fa-2x";
console.log(emailicon);
emaillink.appendChild(emailicon);




