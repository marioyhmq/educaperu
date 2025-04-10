document.addEventListener('DOMContentLoaded', () => {
    const estadisticas = [
      { valor: 75, descripcion: 'Incremento en la productividad (%)' },
      { valor: 60, descripcion: 'Reducción de costos operativos (%)' },
      { valor: 90, descripcion: 'Mejora en la satisfacción del cliente (%)' },
      { valor: 85, descripcion: 'Optimización de procesos internos (%)' }
    ];
  
    const contenedor = document.getElementById('estadisticas-contenedor');
  
    estadisticas.forEach(({ valor, descripcion }) => {
      const div = document.createElement('div');
      div.className = 'estadistica';
  
      const numero = document.createElement('div');
      numero.className = 'estadistica-numero';
      numero.textContent = '0';
  
      const texto = document.createElement('div');
      texto.className = 'estadistica-descripcion';
      texto.textContent = descripcion;
  
      div.appendChild(numero);
      div.appendChild(texto);
      contenedor.appendChild(div);
  
      let count = 0;
      const velocidad = Math.ceil(valor / 50);
      const animar = () => {
        if (count < valor) {
          count += velocidad;
          if (count > valor) count = valor;
          numero.textContent = `${count}%`;
          requestAnimationFrame(animar);
        }
      };
      animar();
    });
  });
  

  // Animaciones de entrada scroll
function animarScroll() {
    const elementos = document.querySelectorAll('.scroll-animate');
    elementos.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const height = window.innerHeight;
  
      if (top < height - 100) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', animarScroll);
  window.addEventListener('load', animarScroll);
  

  function animarScroll() {
    const elementos = document.querySelectorAll('.scroll-animate');
    elementos.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', animarScroll);
  window.addEventListener('load', animarScroll);
  
  // Clase de animación
  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.classList.add('scroll-hidden');
  });
  

  const servicios = document.querySelectorAll('.itemServicio');

  const aparecer = () => {
    servicios.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        el.style.transition = `all 0.6s ease ${i * 0.1}s`;
      }
    });
  };

  window.addEventListener('scroll', aparecer);
  window.addEventListener('load', aparecer);