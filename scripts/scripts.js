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
}

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
