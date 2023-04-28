import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros GuitarLA, tienda de música'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non voluptate perferendis quae quam, tempora a molestiae. Saepe fuga cum cupiditate in eaque aliquam, impedit dolores veritatis! Itaque, iure expedita?</p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ratione expedita et sapiente incidunt tempora, suscipit id non nihil ad dignissimos, obcaecati eos cupiditate voluptatem commodi iste, culpa quas dolorem assumenda? Aliquid, porro nobis deleniti quas ducimus totam ipsum ea culpa eligendi architecto dolor at voluptate ullam repudiandae consequatur quidem?</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}