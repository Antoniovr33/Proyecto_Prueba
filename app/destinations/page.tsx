import SectionTitle from '../components/SectionTitle';
import DestinationCard from '../components/DestinationCard';

const destinos = [
  {
    nombre: 'París',
    descripcion: 'La ciudad del amor, ideal para una escapada romántica.',
    precio: 'Desde 299€',
  },
  {
    nombre: 'Roma',
    descripcion: 'Historia, gastronomía y monumentos impresionantes.',
    precio: 'Desde 259€',
  },
  {
    nombre: 'Tokio',
    descripcion: 'Tradición y modernidad en una ciudad fascinante.',
    precio: 'Desde 899€',
  },
  {
    nombre: 'Nueva York',
    descripcion: 'Rascacielos, compras, cultura y vida urbana.',
    precio: 'Desde 749€',
  },
];

export default function DestinationsPage() {
  return (
    <section className="section">
      <SectionTitle
        title="Destinos disponibles"
        subtitle="Algunos ejemplos de viajes destacados"
      />

      <div className="cards-grid">
        {destinos.map((destino, index) => (
          <DestinationCard
            key={index}
            nombre={destino.nombre}
            descripcion={destino.descripcion}
            precio={destino.precio}
          />
        ))}
      </div>
    </section>
  );
}