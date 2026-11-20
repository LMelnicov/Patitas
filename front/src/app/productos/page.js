import "@/styles/productos.css";

function ProductoCard({ titulo, descripcion, imagen }) {
    return (
        <div className="col">
            <div className="card producto-card h-100">
                <img src={imagen} className="card-img-top" alt={titulo} />
                <div className="card-body text-center">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default async function Productos() {
    const res = await fetch(`${process.env.API_BASE_URL}/api/productos`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('No se pudieron cargar los productos');
    }

    const productos = await res.json();

    return (
        <div className="container" style={{ paddingTop: '150px' }}>
            <h1>Productos</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {productos.map(item => (
                    <ProductoCard
                        key={item.id}
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                        imagen={item.imagen}
                    />
                ))}
            </div>
        </div>
    );
}