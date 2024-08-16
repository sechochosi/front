// About.js
import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h2>Acerca de Nosotros</h2>
      <p>
        Bienvenido a nuestra aplicación. Somos un equipo dedicado a proporcionar
        las mejores soluciones en [tu campo o industria]. Nuestra misión es ofrecer
        productos y servicios de alta calidad que satisfagan las necesidades de
        nuestros clientes.
      </p>
      <p>
        Fundada en [año], nuestra empresa se ha comprometido a la innovación y al
        servicio al cliente. Contamos con un equipo de profesionales altamente
        capacitados que trabajan incansablemente para asegurar que cada proyecto sea
        un éxito.
      </p>
      <p>
        Gracias por visitarnos. Si tienes alguna pregunta o necesitas más
        información, no dudes en <a href="/contact">ponerte en contacto con nosotros</a>.
      </p>
    </div>
  );
}

export default About;
