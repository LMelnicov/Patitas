export default function ServiciosItem({ title, body, imagen, invertido = false }) {

    return (
        <div className={`container-fluid hero-servicios ${invertido ? "servicio-oscuro" : ""}`}>

            <div className={`row h-100 ${invertido ? "flex-row-reverse" : ""}`}>

                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center texto-servicios">

                    <h1>
                        {title}
                    </h1>

                    <p>
                        {body}
                    </p>

                </div>

                <div className="col-md-6 imagen-container">

                    <img
                        src={imagen}
                        alt={title}
                        className="imagen-servicios"
                    />

                </div>

            </div>

        </div>
    );
}