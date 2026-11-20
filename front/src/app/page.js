import "@/styles/home.css"

export default function Home() {
  return (
    <div>
      
      <section className="imagen-inicio">
        <img src="img/dog4.png" alt="" className="img-fluid1 w-100"/>
          <div className="texto-inicio">
            <h1>Cuidamos a quienes más querés</h1>
            <p>En Patitas brindamos atención veterinaria profesional con el cariño y el compromiso que tu mascota
              merece.
            </p>
          </div>
      </section>

      <section className="contenido">
        <div className="container">
          <div className="row">
            <h2 className="contenido-titulo col-6">Nuestro compromiso con tu mascota</h2>
            <p className="contenido-texto col-6">Creemos que cada mascota merece recibir el mejor cuidado posible. Nos
              esforzamos por
              ofrecer un servicio veterinario de excelencia, combinando experiencia, tecnología y un trato cercano
              para que tanto vos como tu compañero se sientan siempre acompañados. Desde los controles de rutina
              hasta
              los tratamientos más complejos.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
