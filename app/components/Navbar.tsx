import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          TravelNow
        </Link>

        <nav className="nav-links">
          <Link href="/">Inicio</Link>
          <Link href="/destinations">Destinos</Link>
          <Link href="/offers">Ofertas</Link>
          <Link href="/about">Sobre nosotros</Link>
          <Link href="/contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}