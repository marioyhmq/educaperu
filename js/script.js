let index = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

setInterval(() => {
  nextSlide();
}, 5000);

function llamar() {
  const botonera = document.getElementById('botonera');
  botonera.classList.toggle("click");
  const menu = document.getElementById('btn-menu');
  menu.querySelector(".fa-bars").classList.toggle("fa-xmark");
}

// Cambio de color al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.style.backgroundColor = '#120B2A'; // Morado oscuro
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// Duplica las imágenes dentro del slider para extenderlo más y evitar espacios vacíos
const sliderTrack = document.getElementById('slider-track');
const totalImgs = sliderTrack.children.length;

for (let i = 0; i < totalImgs; i++) {
  const clone = sliderTrack.children[i].cloneNode(true);
  sliderTrack.appendChild(clone);
}

function scrollFadeIn() {
  const elements = document.querySelectorAll('.scroll-fade');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', scrollFadeIn);
window.addEventListener('load', scrollFadeIn); // por si ya está en pantalla al cargar

// efecto de la acciones

function scrollFadeIn() {
  const elements = document.querySelectorAll('.scroll-fade');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', scrollFadeIn);
window.addEventListener('load', scrollFadeIn);


// Parallax efecto dinámico
window.addEventListener('scroll', () => {
  const section = document.getElementById('valores');
  let offset = window.pageYOffset;
  section.style.backgroundPositionY = offset * 0.5 + "px";
});

// Animación al aparecer
const fadeItems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeItems.forEach(el => observer.observe(el));

//efecto zoom
const zoomItems = document.querySelectorAll('.zoom-in');

const zoomObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

zoomItems.forEach(el => zoomObserver.observe(el));

//principales servicios

window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-fade').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});


//porque elegirnos
const frases = [
  "Brindamos soluciones personalizadas y enfocadas en resultados reales para tu crecimiento profesional.",
  "Contamos con expertos en marketing digital, asesoría estratégica y formación especializada.",
  "Nuestra experiencia de más de 20 años respalda cada proyecto con compromiso y excelencia."
];

let actual = 0;
const texto = document.getElementById('texto-destacado');
const botones = document.querySelectorAll('.boton-cambio');

function mostrarFrase(index) {
  texto.style.opacity = 0;
  setTimeout(() => {
    texto.textContent = frases[index];
    texto.style.opacity = 1;
    botones.forEach(btn => btn.classList.remove('active'));
    botones[index].classList.add('active');
  }, 300);
}

botones.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    actual = i;
    mostrarFrase(actual);
  });
});

setInterval(() => {
  actual = (actual + 1) % frases.length;
  mostrarFrase(actual);
}, 5000);



window.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.href;
  const servicioCards = document.querySelectorAll(".servicio-card");

  servicioCards.forEach(card => {
    const href = card.getAttribute("href");
    if (href && currentURL.includes(href)) {
      servicioCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    }
  });
});
