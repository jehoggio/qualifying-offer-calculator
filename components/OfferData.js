import { parse } from 'node-html-parser'

import styles from '../styles/Home.module.css'

const QualifyingOffer = ({ data }) => {
  const offerData = JSON.parse(data)
  const root = parse(offerData)
  const table = root.querySelector('#salaries-table')
  const tableRows = table.querySelectorAll('tr')
  const salary = tableRows[0].childNodes[3].rawText

  console.log(salary)
  return (
    <div className={styles.offer}>
      <div>{salary}</div>
    </div>
  )
}

export default QualifyingOffer
