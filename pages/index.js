import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Qualifying Offer</title>
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  )
}
