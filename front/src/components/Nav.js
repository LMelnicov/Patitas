"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Nav() {

    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">

                <div className="navbar-brand d-flex align-items-center">
                    <div className="logo rounded-circle d-flex justify-content-center align-items-center me-2">
                        <i className="fa-solid fa-paw"></i>
                    </div>

                    <h1 className="titulo fs-3 mb-0" style={{ fontFamily: "'Google Sans Flex', sans-serif" }}>Patitas</h1>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/servicios" className={`nav-link ${isActive("/servicios") ? "active" : ""}`}>
                                Servicios
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/productos" className={`nav-link ${isActive("/productos") ? "active" : ""}`}>
                                Productos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/nosotros" className={`nav-link ${isActive("/nosotros") ? "active" : ""}`}>
                                Nosotros
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/contacto" className={`nav-link ${isActive("/contacto") ? "active" : ""}`}>
                                Contacto
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}