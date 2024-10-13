const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
} else {
    console.log("Botão de modo escuro não encontrado!");
}
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
    }
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}
