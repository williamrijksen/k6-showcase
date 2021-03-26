import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heavy application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to k6-heavy application
        </h1>

        <div className={styles.grid}>
          <Link href="/heavy">
            <a>Open heavy page</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
