import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <section className="section about-page">
      <SectionTitle
        title="Sobre nosotros"
        subtitle="Una agencia de Viajes"
      />

      <div className="card about-card">
        <p>
          En TravelNow creemos que viajar es mucho más que desplazarse de un lugar a
          otro: es descubrir nuevas culturas, vivir experiencias únicas y crear
          recuerdos inolvidables.
        </p>

        <p>
          Nuestro objetivo es ayudarte a encontrar el destino perfecto para cada
          ocasión, ya sea una escapada de fin de semana, unas vacaciones en familia o
          una aventura internacional llena de emoción.
        </p>

        <p>
          Trabajamos para ofrecerte una experiencia cómoda, clara y atractiva, con
          destinos seleccionados, ofertas especiales y un servicio cercano pensado para
          inspirarte en cada paso de tu próximo viaje.
        </p>
      </div>

      <div className="about-values">
        <div className="value-box">
          <h3>Nuestra misión</h3>
          <p>
            Inspirar a los viajeros a descubrir nuevos lugares con una plataforma
            clara, moderna y fácil de usar.
          </p>
        </div>

        <div className="value-box">
          <h3>Nuestra visión</h3>
          <p>
            Convertir TravelNow en una referencia de ejemplo para aprender
            tecnologías frontend de forma práctica.
          </p>
        </div>

        <div className="value-box">
          <h3>Nuestros valores</h3>
          <p>
            Diseño limpio, navegación sencilla, contenido atractivo y buena
            organización del código.
          </p>
        </div>
      </div>
    </section>
  );
}