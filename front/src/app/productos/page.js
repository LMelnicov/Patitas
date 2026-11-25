import "@/styles/productos.css";

const categorias = [
    { codigo: 'al', titulo: 'ALIMENTACIÓN' },
    { codigo: 'acc', titulo: 'ACCESORIOS' },
    { codigo: 'con', titulo: 'CONFORT' }
];


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
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
            {categorias.map(cat => {
                const delGrupo = productos.filter(p => p.categoria === cat.codigo);

                if (delGrupo.length === 0) return null;

                return (
                    <section key={cat.codigo} className="mb-5">
                        <h2 className="titulo-productos mb-4">{cat.titulo}</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                            {delGrupo.map(item => (
                                <ProductoCard
                                    key={item.id}
                                    titulo={item.titulo}
                                    descripcion={item.descripcion}
                                    imagen={item.imagen}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}