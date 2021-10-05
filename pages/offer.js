import Head from 'next/head'
import QualifyingOffer from '../components/QualifyingOffer'
import styles from '../styles/Home.module.css'

export default function Offer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qualifying Offer</title>
      </Head>

      <main className={styles.main}>
        <QualifyingOffer />
      </main>
    </div>
  )
}
