const Contacto = () => (
    <section id="contacto" className="py-20 px-6 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Nombre" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Correo electrónico" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Mensaje" rows={5} className="w-full border px-4 py-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Enviar mensaje
        </button>
      </form>
    </section>
  )
export default Contacto  