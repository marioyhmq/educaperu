// faq.js
document.addEventListener("DOMContentLoaded", function () {
    const faqs = {
      "marca-personal": [
        {
          pregunta: "¿Qué es una marca personal?",
          respuesta: "Es la huella que dejas en otros. Construirla te ayuda a destacar profesionalmente."
        },
        {
          pregunta: "¿Por qué debería trabajar mi marca personal?",
          respuesta: "Te diferencia, te posiciona como experto y abre oportunidades laborales o comerciales."
        },
        {
          pregunta: "¿Necesito redes sociales para crear mi marca personal?",
          respuesta: "No son obligatorias, pero sí muy útiles para visibilizar tu trabajo y valores."
        }
      ],
      "capacitacion": [
        {
          pregunta: "¿Los cursos tienen certificación?",
          respuesta: "Sí, todos los cursos de EducaPeru incluyen certificación con respaldo académico."
        },
        {
          pregunta: "¿Las clases son en vivo o grabadas?",
          respuesta: "Contamos con ambos formatos para adaptarnos a tu disponibilidad."
        }
      ]
    };
  
    const servicio = document.body.getAttribute("data-servicio") || "marca-personal";
    const contenedor = document.getElementById("faqContainer");
  
    faqs[servicio].forEach(faq => {
      const item = document.createElement("div");
      item.className = "faq-item";
  
      item.innerHTML = `
        <div class="faq-question">
          <span>${faq.pregunta}</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">${faq.respuesta}</div>
      `;
  
      item.querySelector('.faq-question').addEventListener("click", () => {
        item.classList.toggle("open");
      });
  
      contenedor.appendChild(item);
    });
  });

//marca personal 2

document.addEventListener("DOMContentLoaded", () => {
    const preguntas = [
      {
        icono: "fa-user-pen",
        pregunta: "¿Qué es la marca personal?",
        respuesta: "Es cómo te perciben los demás profesionalmente. Te permite destacarte y posicionarte en tu sector."
      },
      {
        icono: "fa-bullseye",
        pregunta: "¿Por qué es importante trabajarla?",
        respuesta: "Porque fortalece tu visibilidad, autoridad y te abre nuevas oportunidades laborales o de negocio."
      },
      {
        icono: "fa-network-wired",
        pregunta: "¿Necesito redes sociales?",
        respuesta: "Son una herramienta poderosa, pero no obligatoria. Se puede construir marca también offline."
      },
      {
        icono: "fa-graduation-cap",
        pregunta: "¿EducaPeru ofrece asesoría en marca personal?",
        respuesta: "Sí, contamos con capacitaciones, mentorías y recursos para ayudarte a construir tu marca."
      }
    ];
  
    const contenedor = document.getElementById("faqCards");
  
    preguntas.forEach(({ icono, pregunta, respuesta }) => {
      const card = document.createElement("div");
      card.className = "faq-card";
      card.innerHTML = `
        <div class="faq-card-icon"><i class="fas ${icono}"></i></div>
        <h3>${pregunta}</h3>
        <p>${respuesta}</p>
      `;
      contenedor.appendChild(card);
    });
  });
  
  