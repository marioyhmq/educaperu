
  // Espera a que cargue la página
  const logo = document.getElementById('logoAnimado');

  let scale = 1;
  let rotate = 0;

  const animateLogo = setInterval(() => {
    scale = scale === 1 ? 1.1 : 1;
    rotate += 15;
    logo.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
  }, 300);

  window.addEventListener('load', () => {
    setTimeout(() => {
      clearInterval(animateLogo); // Detener animación
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
    }, 3500); // Duración total del preloader
  });

