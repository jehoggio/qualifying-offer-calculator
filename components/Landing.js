import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qualifying Offer</h1>
      <p className={styles.subtitle}>
        {' '}
        Click the button to see the qualifying offer
      </p>
      <button className={styles.button}>
        <Link href='/offer'>
          <span className={styles.buttonText}>Get Offer</span>
        </Link>
      </button>
    </div>
  )
}

export default Landing
