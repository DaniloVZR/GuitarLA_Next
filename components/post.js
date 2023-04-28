import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css";

const Post = ({ post }) => {
  const { titulo, contenido, url, imagen, publishedAt } = post

  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} height={400} width={600} />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;