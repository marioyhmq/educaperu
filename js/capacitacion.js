const imagenesGaleria = [
    './assets/capacitacion/2.jpeg', './assets/capacitacion/3.jpeg', './assets/capacitacion/4.jpeg', './assets/capacitacion/5.jpeg',
    './assets/capacitacion/6.jpeg', './assets/capacitacion/7.jpeg', './assets/capacitacion/8.jpeg','./assets/capacitacion/9.jpeg',
    './assets/capacitacion/10.jpeg', './assets/capacitacion/11.jpeg', './assets/capacitacion/12.jpeg','./assets/capacitacion/13.jpeg',
    './assets/capacitacion/14.jpeg', './assets/capacitacion/15.jpeg', './assets/capacitacion/16.jpeg','./assets/capacitacion/17.jpeg',
    './assets/capacitacion/18.jpeg',
  ];
  
  const galeriaContainer = document.getElementById('galeriaContainer');
  imagenesGaleria.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Foto de taller EducaPeru";
    img.classList.add('galeria-imagen');
    img.addEventListener('click', () => mostrarImagen(src));
    galeriaContainer.appendChild(img);
  });
  
  const modal = document.getElementById('imagenModal');
  const modalImg = document.getElementById('imgAmpliada');
  const cerrar = document.querySelector('.cerrar');
  
  function mostrarImagen(src) {
    modal.style.display = 'flex';
    modalImg.src = src;
  }
  
  cerrar.onclick = function () {
    modal.style.display = 'none';
  }
  
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

  //capacitacion 2
  const modulos = [
    {
      titulo: "Marketing Digital",
      duracion: "Próximamente",
      objetivo: "Nueva capacitación disponible pronto"
    },
    {
      titulo: "Finanzas para No Financieros",
      duracion: "Próximamente",
      objetivo: "Nueva capacitación disponible pronto"
    },
    {
      titulo: "Liderazgo y Trabajo en Equipo",
      duracion: "Próximamente",
      objetivo: "Nueva capacitación disponible pronto"
    },
    {
      titulo: "CRM Empresarial",
      duracion: "Próximamente",
      objetivo: "Nueva capacitación disponible pronto"
    },
    {
      titulo: "Gestión de Proyectos",
      duracion: "Próximamente",
      objetivo: "Nueva capacitación disponible pronto"
    }
  ];
  
  const container = document.getElementById("modulosContainer");
  modulos.forEach(({ titulo, duracion, objetivo }) => {
    const card = document.createElement("div");
    card.className = "modulo-card";
    card.innerHTML = `
      <h3>${titulo}</h3>
      <p><strong>Duración:</strong> ${duracion}</p>
      <p>${objetivo}</p>
    `;
    container.appendChild(card);
  });
 