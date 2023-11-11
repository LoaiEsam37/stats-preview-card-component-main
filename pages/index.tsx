import { Lexend_Deca } from "next/font/google"
import styles from "@/styles/home.module.css"

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Home() {
  return (
    <main className={`${styles.main} ${lexendDeca.className}`}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h1>
            Get <strong>insights</strong> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className={styles.row}>
            <div>
              <span>10k+</span>
              <p>companies</p>
            </div>
            <div>
              <span>314</span>
              <p>templates</p>
            </div>
            <div>
              <span>12m+</span>
              <p>queries</p>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}></div>
        </div>
      </div>
    </main>
  )
}
