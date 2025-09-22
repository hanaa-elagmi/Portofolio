

let loading = document.querySelector(".loading");
loading.style.display = "flex";

window.addEventListener('load', () => {
    loading.style.display = "none";

})
// -------------------typed.js
var typed = new Typed('.typedEll', {
    strings: ['Hanaa Abdelhadi.', 'a Front-End Developer.', "a Back-End Developer.", "a Fullstack .NET developer."],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    loop: true,
    loopCount: Infinity,
});

//   -----------------aos-animation
AOS.init();


// ------------------change navbar-background-color
let navlink = document.querySelectorAll(".navlink");
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY >= 100) {
        navbar.style.backgroundColor = 'black';
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.color = "white";

        }

    }
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = 'transparent';
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.color = "black";

        }

    }
});



// -------------------change bg-img

let backgrounds = [
    {
        name: "bg1",
        src: "Images/bg1.png"
        
    },
    {
        name: "bg2",
        src: "Images/bg2.jpg"
    }
]

let cbx = document.querySelector("#cbx-51");
cbx.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    for (let i = 0; i < navlink.length; i++) {
        navlink[i].style.color = "white";

    }
    loading.style.display = "flex";
    let imgelement = document.querySelector(".bgimg");
    let imgid = imgelement.id;

    if (imgid == "bg1") {
        imgelement.src = backgrounds[1].src;
        imgelement.id = backgrounds[1].name;
        
    } else {
        imgelement.src = backgrounds[0].src;
        imgelement.id = backgrounds[0].name
    }
    setTimeout(() => {
        loading.style.display = "none";
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.color = "black";

        }
    }, 3000);

});



// ---------------------------------------------projects

let projects = [];
let JS = [
   
    {
        name: "KIARA Store",
        img: "Images/Projects/kiara.png",
        repoLink: "https://github.com/hanaa-elagmi/Kiara",
        DemoLink: "https://hanaa-elagmi.github.io/Kiara/"
    },
    {
        name: "Weather Api",
        img: "Images/Projects/WeatherApi.jpg",
        repoLink: "https://github.com/hanaa-elagmi/Weather-Api",
        DemoLink: "https://hanaa-elagmi.github.io/Weather-Api/"
    },
    {

        name: "Calculator",
        img: "Images/Projects/calc.png",
        repoLink: "https://github.com/hanaa-elagmi/Calculater",
        DemoLink: "https://hanaa-elagmi.github.io/Calculater/"
    },
    {
        name: "Slider",
        img: "Images/Projects/slider.png",
        repoLink: "https://github.com/hanaa-elagmi/Slider",
        DemoLink: "https://hanaa-elagmi.github.io/Slider/"
    },
    {
        name: "To-Do-List",
        img: "Images/Projects/toDo.png",
        repoLink: "https://github.com/hanaa-elagmi/To-Do-List",
        DemoLink: "https://hanaa-elagmi.github.io/To-Do-List/"
    },
    {
        name: "Osaka",
        img: "Images/Projects/osaka.png",
        repoLink: "https://github.com/hanaa-elagmi/Osaka",
        DemoLink: "https://hanaa-elagmi.github.io/Osaka/"
    },

    {
        name: "Fokir",
        img: "Images/Projects/fokir.png",
        repoLink: "https://github.com/hanaa-elagmi/Fokir",
        DemoLink: "https://hanaa-elagmi.github.io/Fokir/"
    },

    {
        name: "Simone",
        img: "Images/Projects/simone.png",
        repoLink: "https://github.com/hanaa-elagmi/SIMONE",
        DemoLink: "https://hanaa-elagmi.github.io/SIMONE/"
    },
    {
        name: "Crud",
        img: "Images/Projects/crud.png",
        repoLink: "https://github.com/hanaa-elagmi/CRUD-OP",
        DemoLink: "https://hanaa-elagmi.github.io/CRUD-OP/"
    },
    {
        name: "Bakery",
        img: "Images/Projects/bakery.png",
        repoLink: "https://github.com/hanaa-elagmi/Bakery",
        DemoLink: "https://hanaa-elagmi.github.io/Bakery/"
    },

];
let ANGULAR = [

];

let BackEnd = [
    {
        name: "ProductCatolog",
        img: "Images/Projects/ProductCatalog.png",
        repoLink: "https://github.com/hanaa-elagmi/ProductCatalog",
        DemoLink: "https://veon.runasp.net/"
    },
    {
        name: "KIARA Backend",
        img: "Images/Projects/backend.png",
        repoLink: "https://github.com/hanaa-elagmi/Kiara-Backend",
        DemoLink: "https://github.com/hanaa-elagmi/Kiara-Backend"
    }
]
let items = document.querySelectorAll(".ProjectTypes .item")
items[0].style.borderBottom = "2px solid white";

items.forEach(element => {
    element.addEventListener('click', () => {

        if (element.id == "HTML") {
            projects = JS;


        }

        if (element.id == "ANGULAR") {
            projects = ANGULAR;


        }
        if (element.id == "BACKEND") {
            projects = BackEnd;
        }
        items.forEach(el2 => {
            el2.style.borderBottom = "none";

        });
        element.style.borderBottom = "2px solid white";
        displayProjects(projects);


    })

});
function displayProjects(projectsArr) {
    let project = "";
    if (projectsArr.length == 0) {
        project = `<div class="col-md-12 text-center">
            <img src="Images/Projects/Comingsoon.png" class=" CSoon">
            </div> `;
    }
    else {
        for (let i = 0; i < projectsArr.length; i++) {

            project += `
    
        <div class="col-md-6" >
            <div class="projectItem"  data-aos="fade-up" data-aos-easing="linear"
      data-aos-duration="1000"  >
            <div class="projectimg" style="background-image: url(${projectsArr[i].img})">
                <div class="imglayer">
                    <p>${projectsArr[i].name}</p>
                    <div>
                    <a href="${projectsArr[i].repoLink}" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="${projectsArr[i].DemoLink}" target="_blank">
                    <i class="fa-solid fa-eye"></i>
                    </a>
                    </div>
                </div>
            </div>
    
            </div>
    
    
        </div>
    
           `

        }
    }

    document.querySelector(".allprojects").innerHTML = project
};
displayProjects(JS);


// ----------------------------------------end projects




// ----------------------------------start contact


let nameinput, emailinput, messagetext, subjectinput;
let form = document.querySelector('form');
nameinput = document.getElementById("name");
emailinput = document.getElementById("email");
messagetext = document.getElementById("message");
subjectinput = document.getElementById("subject");

const serverID = "service_b26a076"
const tempaletID = "template_8kv239d"
const PublicKey = "I1ELjUIzIplYvBQgg"


// send message
emailjs.init(PublicKey);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = {
        user_subject: subjectinput.value,
        from_name: nameinput.value,
        user_email: emailinput.value,
        user_message: messagetext.value
    };
    emailjs.send(serverID, tempaletID, inputData).then(
        () => {
            subjectinput.value = ""
            nameinput.value = ""
            emailinput.value = ""
            messagetext.value = ""
            console.log("success");

        }, (error) => {
            console.log(error);

        }
    );
})







