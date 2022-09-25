const hamburger = document.querySelector(".hamburger");
const subHamburger = document.querySelector(".sub-nav-container .hamburger");
const navMenu = document.querySelector(".nav-men");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
subHamburger.addEventListener("click", () => {
    subHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Intersection obsever

const header = document.querySelector('header .nav-container');
const subNav = document.querySelector('.sub-navigation');
const activeAbout = document.querySelector('.sub-navigation .nav-men .about');
const activeProjects = document.querySelector('.sub-navigation .nav-men .projects');
const activeContact = document.querySelector('.sub-navigation .nav-men .contact');
const about = document.querySelector('.sub-navigation .about-tag h1');
const projects = document.querySelector('.sub-navigation .projects-tag h1');
const moreProjects = document.querySelector('.sub-navigation .more-projects-tag h1');
const contact = document.querySelector('.sub-navigation .contact-tag h1');
const sectionHeader = document.querySelector('header');
const sectionAbout = document.querySelector('#about');
const sectionProjects = document.querySelector('#projects');
const sectionMoreProjects = document.querySelector('#more-projects');
const sectionContact = document.querySelector('#contact');

const options = {
    rootMargin: "-15% 0% 0% 0%"
};
const newOptions = {
    threshold:0.85,
    rootMargin: "70% 0% 0% 0%"
}

const HeaderObserver = new IntersectionObserver (
    function(entries, HeaderObserver){
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('unset');
                subNav.classList.add('fixed');
            } else {
                header.classList.remove('unset');
                subNav.classList.remove('fixed');
            }
        });
    },
    options);
    HeaderObserver.observe(sectionHeader)


const aboutObserver = new IntersectionObserver (
    function(entries, aboutObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                about.classList.add('fixed');
                activeAbout.classList.add('active');
            } else {
                about.classList.remove('fixed');
                activeAbout.classList.remove('active');
            }
        });
    },
    options);
    aboutObserver.observe(sectionAbout)

const projectsObserver = new IntersectionObserver (
    function(entries, projectsObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projects.classList.add('fixed');
                activeProjects.classList.add('active');
            } else {
                projects.classList.remove('fixed');
                activeProjects.classList.remove('active');
            }
        });
    },
    newOptions);
    projectsObserver.observe(sectionProjects)

const moreProjectsObserver = new IntersectionObserver (
    function(entries, moreProjectsObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                moreProjects.classList.add('fixed');
                activeProjects.classList.add('active');
            } else {
                moreProjects.classList.remove('fixed');
                activeProjects.classList.remove('active');
            }
        });
    },
    newOptions);
    moreProjectsObserver.observe(sectionMoreProjects)

const contactObserver = new IntersectionObserver (
    function(entries, contactObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contact.classList.add('fixed');
                activeContact.classList.add('active');
            } else {
                contact.classList.remove('fixed');
                activeContact.classList.remove('active');
            }
        });
    },
    newOptions);
    contactObserver.observe(sectionContact)

    document.getElementById("footer-year").innerHTML = new Date().getFullYear();
