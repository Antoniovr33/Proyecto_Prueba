import Image from 'next/image';

type DestinationCardProps = {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
};

export default function DestinationCard({
  nombre,
  descripcion,
  precio,
  imagen,
}: DestinationCardProps) {
  return (
    <div className="card destination-card">
      <div className="destination-image">
        <Image
          src={imagen}
          alt={nombre}
          width={400}
          height={250}
          className="destination-img"
        />
      </div>

      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>{precio}</strong>
    </div>
  );
}