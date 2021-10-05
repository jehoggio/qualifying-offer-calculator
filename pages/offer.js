import Head from 'next/head'
import QualifyingOffer from '../components/QualifyingOffer'
import styles from '../styles/Home.module.css'

export default function Offer({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qualifying Offer</title>
      </Head>

      <main className={styles.main}>
        <QualifyingOffer data={data} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://questionnaire-148920.appspot.com/swe/data.html'
  )

  const html = await res.text()

  const data = JSON.stringify(html)

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
  }
}
