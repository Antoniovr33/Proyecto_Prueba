'use client';

import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <section className="section">
      <SectionTitle
        title="Contacto"
        subtitle="Formulario de ejemplo con useState"
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          rows={6}
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Enviar mensaje
        </button>
      </form>

      {enviado && (
        <p className="success-message">Mensaje enviado correctamente.</p>
      )}
    </section>
  );
}