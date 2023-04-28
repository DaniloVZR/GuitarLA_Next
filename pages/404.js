import Link from "next/link";
import Layout from "../components/layout";

const Pagina404 = () => {
  return (
    <Layout
      title="Página no encontrada"

    >
      <p className="error">Página No Encontrada</p>
      <Link className="error-enlace" href='/'>
        Ir a Inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;