import SectionTitle from '../components/SectionTitle';

const ofertas = [
  {
    titulo: 'Escapada a Lisboa',
    detalle: '3 días y 2 noches con desayuno incluido.',
    precio: '199€',
  },
  {
    titulo: 'Fin de semana en Ámsterdam',
    detalle: 'Vuelo + hotel céntrico.',
    precio: '279€',
  },
  {
    titulo: 'Oferta verano en Canarias',
    detalle: '7 noches cerca de la playa.',
    precio: '499€',
  },
];

export default function OffersPage() {
  return (
    <section className="section">
      <SectionTitle
        title="Ofertas especiales"
        subtitle="Promociones de ejemplo para practicar con listas"
      />

      <div className="cards-grid">
        {ofertas.map((oferta, index) => (
          <div className="card" key={index}>
            <h3>{oferta.titulo}</h3>
            <p>{oferta.detalle}</p>
            <strong>{oferta.precio}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}