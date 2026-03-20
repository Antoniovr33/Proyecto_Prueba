import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <section className="section about-page">
      <SectionTitle
        title="Sobre nosotros"
        subtitle="Una agencia ficticia para este proyecto"
      />

      <div className="card about-card">
        <p>
          TravelNow es una página web de ejemplo desarrollada con Next.js para
          practicar la creación de rutas, componentes, estilos y navegación.
        </p>

        <p>
          El objetivo del proyecto es entender la estructura básica de una
          aplicación moderna de frontend y organizar varias páginas dentro del
          App Router.
        </p>

        <p>
          Esta web incluye una portada, una sección de destinos, una página de
          ofertas, una sección sobre la empresa y un formulario de contacto.
        </p>
      </div>
    </section>
  );
}