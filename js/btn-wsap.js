const btnFloat = document.getElementById("wa-float");
const chatBox = document.getElementById("wa-chat");
const cerrarBtn = document.getElementById("cerrar-chat");
const input = document.getElementById("wa-input-text");
const body = document.getElementById("wa-body");
const enviarBtn = document.getElementById("enviar-msg");

// Mostrar/Ocultar chat
btnFloat.addEventListener("click", () => {
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

cerrarBtn.addEventListener("click", () => {
  chatBox.style.display = "none";
  body.innerHTML = `<div class="wa-msg bot">¡Hola! ¿En qué puedo ayudarte hoy?</div>`;
});

// Enviar mensaje y detectar intención
enviarBtn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (!texto) return;

  const msgUser = document.createElement("div");
  msgUser.className = "wa-msg user";
  msgUser.textContent = texto;
  body.appendChild(msgUser);

  input.value = "";

  // Analiza palabras clave
  const textoMinus = texto.toLowerCase();
  let respuesta = "";

  if (textoMinus.includes("precio") || textoMinus.includes("cuesta") || textoMinus.includes("vale") || textoMinus.includes("costo")) {
    respuesta = `
      El precio depende del curso o asesoría que elijas. 
      ¿Deseas conversar directamente con un asesor?
      <br><br>
      <a href="https://wa.me/5192368508?text=Hola,%20quiero%20saber%20el%20precio%20de%20un%20curso%20en%20EducaPeru" target="_blank" style="color:#25d366; font-weight:bold;">👉 Clic aquí para hablar con un asesor</a>
    `;
  } else if (textoMinus.includes("curso") || textoMinus.includes("capacitacion") || textoMinus.includes("formacion")) {
    respuesta = "Ofrecemos cursos de Gestión, Marketing, Marca Personal y más. ¿Sobre cuál deseas saber?";
  } else if (textoMinus.includes("gracias") || textoMinus.includes("ok")) {
    respuesta = "¡Gracias a ti por escribirnos! 😊";
  } else {
    respuesta = "Gracias por tu mensaje. Un asesor te responderá pronto.";
  }

  setTimeout(() => {
    const msgBot = document.createElement("div");
    msgBot.className = "wa-msg bot";
    msgBot.innerHTML = respuesta;
    body.appendChild(msgBot);
    body.scrollTop = body.scrollHeight;
  }, 1000);
});
