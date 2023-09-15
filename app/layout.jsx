import React from "react";
import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Mi tienda con NextJS",
  description: "Esta es la pagina principal",
  keywords: "tienda, ecomerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
