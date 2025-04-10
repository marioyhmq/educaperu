  window.addEventListener("load", () => {
    const popup = document.getElementById("popup-alert");
    const closeBtn = document.getElementById("popup-close");
    popup.style.display = "flex";

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // PERSONALIZACIÓN SEGÚN PÁGINA
    const ruta = window.location.pathname;
    const img = document.getElementById("popup-img");
    const title = document.getElementById("popup-title");
    const link = document.getElementById("popup-link");

    if (ruta.includes("cursos")) {
      img.src = "./assets/cursos/curso-capacitacion.jpeg";
      title.textContent = "Capacitación Profesional";
      link.href = "https://wa.me/51995660930?text=Hola,%20quiero%20inscribirme%20en%20Capacitación%20Profesional";
    }
  });