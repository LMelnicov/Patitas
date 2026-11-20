import "@/styles/nosotros.css"

export default function Nosotros() {
    return (
        <div>

            <section className="historia">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>Nuestra Historia</h1>
                            <p>
                                Patitas nació con un objetivo muy claro: brindar atención
                                veterinaria de calidad, basada en el respeto, el cariño y
                                el compromiso con cada mascota.
                            </p>
                            <p>
                                Comenzamos como un pequeño consultorio familiar y, con el
                                paso de los años, fuimos creciendo junto a las familias
                                que confiaron en nosotros. Hoy contamos con un equipo
                                comprometido y preparado para acompañar a cada mascota
                                durante todas las etapas de su vida.
                            </p>

                            <p>
                                Para nosotros, cada paciente es único. Por eso buscamos
                                ofrecer una atención personalizada, escuchando a sus
                                familias y trabajando para garantizar su salud y bienestar.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="img/nosotros.jpg" alt="" className="imagen-nosotros img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>
            </section>


            <section className="equipo">
                <div className="container mb-5">
                    <div className="mb-5">
                        <h1>Nuestro equipo</h1>
                    </div>

                    <div className="row justify-content-center g-5">
                        <div className="col-md-4">
                            <div className="card card-veterinario h-100">
                                <img src="img/diego.avif" alt="" className="card-img-top"/>
                                    <div className="card-body text-center">
                                        <h3>Diego Fernandez</h3>
                                        <h5>Veterinaria</h5>
                                        <p>
                                            Especialista en medicina clínica veterinaria. Brinda atención integral a cada paciente,
                                            desde controles de rutina hasta el diagnóstico y tratamiento de diferentes enfermedades,
                                            trabajando con dedicación para garantizar una vida saludable y feliz.
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card card-veterinario h-100">
                                <img src="img/mateo.jpg" alt="" className="card-img-top"/>
                                    <div className="card-body text-center">
                                        <h3>Mateo Sanchez</h3>
                                        <h5>Cirugía</h5>
                                        <p>
                                            Especialista en cirugía veterinaria. Cuenta con experiencia en diferentes procedimientos
                                            quirúrgicos y trabaja con dedicación para brindar una atención segura y personalizada,
                                            acompañando a cada mascota durante su recuperación.
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card card-veterinario h-100">
                                <img src="img/laura.avif" alt="" className="card-img-top"/>
                                    <div className="card-body text-center">
                                        <h3>Laura Martinez</h3>
                                        <h5>Peluqueria y nutrición animal</h5>
                                        <p>
                                            Combina sus conocimientos para cuidar la salud y el bienestar de cada mascota,
                                            ofreciendo planes de alimentación personalizados y servicios de peluquería adaptados a
                                            las necesidades de cada perro.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}
