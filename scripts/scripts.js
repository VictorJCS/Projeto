/**Olá, bem-vindos ao script.js. De forma resumida, essa página terá as principais funções
em JavaScript, fornecendo interatividade ao usuário através do HTML.**/


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000);

function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}
//FUNÇÃO "NOTURNA":
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const darkModeStyles = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    header.dark-mode {
        background-color: #1f1f1f;
    }
    nav.dark-mode {
        background-color: #333;
    }
    section.dark-mode {
        background-color: #1f1f1f;
        color: #ffffff;
    }
    footer.dark-mode {
        background-color: #333;
    }
    #share a {
        background-color: #007bff;
    }
    #share a:hover {
        background-color: #0056b3;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
