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
        subtitle="Promociones pensadas para inspirarte a viajar"
      />

      <div className="offers-banner">
        <h2>Descuentos exclusivos por tiempo limitado</h2>
        <p>
          Aprovecha nuestras ofertas destacadas y encuentra el viaje ideal para
          tu próxima escapada, ya sea en pareja, con amigos o en familia.
        </p>
      </div>

      <div className="cards-grid">
        {ofertas.map((oferta, index) => (
          <div className="card offer-card" key={index}>
            <span className="offer-tag">Oferta destacada</span>
            <h3>{oferta.titulo}</h3>
            <p>{oferta.detalle}</p>
            <strong>{oferta.precio}</strong>
          </div>
        ))}
      </div>

      <div className="extra-offers-grid">
        <div className="mini-offer">
          <h3>Viajes románticos</h3>
          <p>
            Escapadas diseñadas para disfrutar de ciudades mágicas y experiencias
            inolvidables.
          </p>
        </div>

        <div className="mini-offer">
          <h3>Paquetes familiares</h3>
          <p>
            Opciones cómodas y económicas para viajar en grupo y disfrutar sin
            preocupaciones.
          </p>
        </div>

        <div className="mini-offer">
          <h3>Destinos premium</h3>
          <p>
            Hoteles de calidad, ubicaciones privilegiadas y servicios
            exclusivos.
          </p>
        </div>
      </div>
    </section>
  );
}