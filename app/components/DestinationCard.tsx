type DestinationCardProps = {
  nombre: string;
  descripcion: string;
  precio: string;
};

export default function DestinationCard({
  nombre,
  descripcion,
  precio,
}: DestinationCardProps) {
  return (
    <div className="card destination-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>{precio}</strong>
    </div>
  );
}