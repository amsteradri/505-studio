const Portafolio = () => (
    <section id="portafolio" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Proyectos Recientes</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="h-48 bg-gray-300" />
          <div className="p-4">
            <h4 className="font-semibold">Proyecto 1</h4>
            <p className="text-sm text-gray-600">Sitio web para tienda de ropa.</p>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="h-48 bg-gray-300" />
          <div className="p-4">
            <h4 className="font-semibold">Proyecto 2</h4>
            <p className="text-sm text-gray-600">Branding para consultora.</p>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="h-48 bg-gray-300" />
          <div className="p-4">
            <h4 className="font-semibold">Proyecto 3</h4>
            <p className="text-sm text-gray-600">Landing para campaña política.</p>
          </div>
        </div>
      </div>
    </section>
  )

export default Portafolio