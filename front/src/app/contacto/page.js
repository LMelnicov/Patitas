import ContactForm from "@/components/ContactForm";
import "@/styles/contacto.css"

export default function Contacto() {
    return (
        <main className="contacto-padre">
            <div className="contacto">
                <div>
                    <h2 className="titulo-contacto">Contacto rápido</h2>
                    <ContactForm postUrl={`${process.env.API_BASE_URL}/api/contacto`}/>
                </div>
                <div className="datos">
                    <h2 className="titulo-contacto">Otras vías de comunicación</h2>
                    <ul>
                        <li>
                            <a href="https://wa.me"><i className="fa-brands fa-whatsapp fa-2x"
                                style={{color: "rgb(99, 230, 190)"}}></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/?locale=es_LA"><i className="fa-brands fa-facebook fa-2x"
                                style={{color: "rgb(55, 138, 237)"}}></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/?hl=es"><i className="fa-brands fa-instagram fa-2x"
                                style={{color: "rgb(226, 57, 155)"}}></i></a>
                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope fa-2x"
                                style={{color: "rgb(200, 43, 43)"}}></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>

    );
}