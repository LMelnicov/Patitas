import ServiciosItem from "@/components/ServiciosItem";
import "@/styles/servicios.css";

export default function Servicios() {
    return (
        <section>

            <ServiciosItem
                title={<>Consultas<br/>clínicas</>}
                body="Realizamos consultas generales para evaluar el estado de salud de tu mascota, detectar posibles enfermedades y brindar un seguimiento personalizado. Nuestro objetivo es prevenir problemas y garantizar una vida saludable en cada etapa."
                imagen="/img/consulta.jpg"
            />

            <ServiciosItem
                title="Vacunación y cirugías"
                body="Contamos con planes de vacunación adaptados a la edad y necesidades de cada mascota. Además, realizamos cirugías programadas y procedimientos de urgencia con equipos modernos y protocolos de seguridad. Acompañamos a tu mascota durante todo el proceso, desde la evaluación previa hasta su recuperación."
                imagen="/img/vacunacion.jpg"
                invertido={true}
            />

            <ServiciosItem
                title="Peluquería y nutrición"
                body="Ofrecemos servicios de baño, corte de pelo, cepillado y limpieza de oídos y uñas. Así como también brindamos asesoramiento nutricional personalizado para cachorros, adultos y mascotas mayores. Te ayudamos a elegir la alimentación más adecuada según su edad, tamaño, raza y condición física."
                imagen="/img/peluqueria.jpg"
            />

        </section>
    );
}
