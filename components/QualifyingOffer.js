import Link from 'next/link'
import OfferData from './OfferData'
import styles from '../styles/Home.module.css'

const QualifyingOffer = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Current Offer</h1>
      <p className={styles.subtitle}>
        {' '}
        This is the average salary of the top 125 MLB players
      </p>

      <OfferData data={data} />

      <button className={styles.button}>
        <Link href='/offer'>Recalculate Offer</Link>
      </button>
    </div>
  )
}

export default QualifyingOffer
