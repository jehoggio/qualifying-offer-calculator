import { parse } from 'node-html-parser'
import styles from '../styles/Home.module.css'

const OfferData = ({ data }) => {
  const parsed = parse(data)
  const tr = parsed.querySelectorAll('tr')
  const rowData = tr.map((item) =>
    item.childNodes.map((inner) => inner.rawText)
  )
  const salaries = rowData.map((item) => item[3])
  // convert to int
  const salariesInt = salaries.map((item) => parseInt(item.replace(/\D/g, '')))
  // sort salaries
  const sortedSalaries = salariesInt.sort((a, b) => b - a)
  // get top 125 salaries
  const top125Salaries = sortedSalaries.slice(0, 125)
  // averege of top 125 salaries but ignore NaN
  const averageTopSalaryNums =
    top125Salaries.filter((item) => !isNaN(item)).reduce((a, b) => a + b, 0) /
    125
  // add commas to averageTopSalaryNums and round to 2 decimal places
  const averageTopSalary = averageTopSalaryNums
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')

  return (
    <div className={styles.offer}>
      <div>${averageTopSalary}</div>
    </div>
  )
}

export default OfferData
