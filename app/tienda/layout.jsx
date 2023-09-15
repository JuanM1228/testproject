import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Tienda Layout",
};
const TiendaLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Tienda</h3>
        <ul>
          <Link href='/tienda/categorias'>
            <li>Categorias</li>
          </Link>
          <Link href='/tienda/productos'>
            <li>Productos</li>
          </Link>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default TiendaLayout;
