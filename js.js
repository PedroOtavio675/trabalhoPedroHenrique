/* ==========================================
   MENU MOBILE
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ==========================================
   FECHAR MENU AO CLICAR
========================================== */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==========================================
   ANIMAÇÃO AO ROLAR
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.1
});

document
.querySelectorAll(
".section, .card, .content-box, .lang-card"
)
.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* ==========================================
   EFEITO PARALLAX SUAVE
========================================== */

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    const hero =
    document.querySelector(".hero");

    hero.style.backgroundPositionY =
    scroll * 0.4 + "px";

});

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";
btnTop.classList.add("top-button");

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.cursor = "pointer";
btnTop.style.fontSize = "22px";
btnTop.style.color = "#fff";
btnTop.style.background =
"linear-gradient(45deg,#00d4ff,#7c3aed)";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        btnTop.style.display = "block";
    }
    else{
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* ==========================================
   DESTAQUE MENU ATIVO
========================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active-link");
        }

    });

});