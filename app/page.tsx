import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Descubre tu próxima aventura</h1>
          <p>
            Encuentra destinos increíbles, ofertas únicas y experiencias que
            recordarás toda la vida.
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
          subtitle="Proyecto de práctica hecho con Next.js"
        />

        <div className="features-grid">
          <div className="card">
            <h3>Destinos variados</h3>
            <p>Playa, montaña, ciudades europeas y escapadas culturales.</p>
          </div>

          <div className="card">
            <h3>Ofertas especiales</h3>
            <p>Promociones limitadas para ahorrar en tus viajes favoritos.</p>
          </div>

          <div className="card">
            <h3>Contacto rápido</h3>
            <p>Formulario sencillo para resolver dudas o pedir información.</p>
          </div>
        </div>
      </section>
    </div>
  );
}