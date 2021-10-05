import Link from 'next/link'
import styles from '../styles/Home.module.css'

const QualifyingOffer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Current Offer</h1>
      <p className={styles.subtitle}> Here is the current Qualifying Offer. </p>

      <div className={styles.offer}>Data</div>

      <button className={styles.button}>
        <Link href='/offer'>
          <span className={styles.buttonText}>Recalculate Offer</span>
        </Link>
      </button>
    </div>
  )
}

export default QualifyingOffer
