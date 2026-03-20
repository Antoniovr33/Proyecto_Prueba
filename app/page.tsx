import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Tu próxima aventura empieza aquí</span>
          <h1>Descubre destinos increíbles por todo el mundo</h1>
          <p>
            En TravelNow te ayudamos a encontrar escapadas únicas, viajes de
            ensueño y ofertas especiales para que disfrutes de experiencias
            inolvidables al mejor precio.
          </p>

          <div className="hero-buttons">
            <Link href="/destinations" className="btn">
              Ver destinos
            </Link>
            <Link href="/offers" className="btn btn-secondary">
              Ver ofertas
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          title="¿Por qué elegir TravelNow?"
          subtitle="Una web moderna de viajes"
        />

        <div className="features-grid">
          <div className="card feature-card">
            <h3>Destinos variados</h3>
            <p>
              Encuentra ciudades europeas, escapadas tropicales, viajes
              culturales y destinos llenos de aventura.
            </p>
          </div>

          <div className="card feature-card">
            <h3>Ofertas especiales</h3>
            <p>
              Descubre promociones limitadas para ahorrar en hoteles, vuelos y
              experiencias exclusivas.
            </p>
          </div>

          <div className="card feature-card">
            <h3>Atención personalizada</h3>
            <p>
              Nuestro equipo ficticio está listo para ayudarte a planificar el
              viaje perfecto de forma sencilla.
            </p>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <div className="highlight-box">
          <div>
            <h2>Viaja con comodidad, seguridad y estilo</h2>
            <p>
              Organizamos experiencias pensadas para todo tipo de viajeros:
              parejas, familias, grupos de amigos y aventureros que quieren
              conocer nuevos rincones del mundo.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Contactar ahora
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          title="Lo que encontrarás en nuestra web"
          subtitle="Una pequeña demostración de contenido dinámico y diseño visual"
        />

        <div className="info-grid">
          <div className="info-box">
            <h3>Escapadas urbanas</h3>
            <p>
              Perfectas para desconectar unos días y disfrutar de cultura,
              gastronomía y monumentos.
            </p>
          </div>

          <div className="info-box">
            <h3>Vacaciones de verano</h3>
            <p>
              Playa, sol y relax con opciones para todos los gustos y
              presupuestos.
            </p>
          </div>

          <div className="info-box">
            <h3>Aventura internacional</h3>
            <p>
              Descubre destinos lejanos con experiencias únicas y recuerdos para
              toda la vida.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}