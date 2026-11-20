
export default function ContactForm() {

    return (

        <form action="" method="" className="formulario">
            <p>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="" />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="text" name="" />
            </p>
            <p>
                <label htmlFor="telefono">Telefono</label>
                <input type="text" name="" />
            </p>
            <p>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name=""></textarea>
            </p>
            <p className="acciones">
                <input type="submit" value="Enviar" />
            </p>
        </form>
    )
}

