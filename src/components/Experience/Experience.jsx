import { profile } from '../../data/profile.js'
import styles from './Experience.module.css'

function tenure(since) {
  const [day, month, year] = since.split('/').map(Number)
  const start = new Date(year, month - 1, day)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  if (now.getDate() < start.getDate()) months -= 1
  if (months < 0) {
    years -= 1
    months += 12
  }
  const yearPart = years > 0 ? `${years} an${years > 1 ? 's' : ''}` : ''
  const monthPart = months > 0 ? `${months} mois` : ''
  if (yearPart && monthPart) return `${yearPart} et ${monthPart}`
  return yearPart || monthPart || "moins d'un mois"
}

function Card({ job }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <a href={job.url} target="_blank" rel="noreferrer" aria-label={job.name}>
          <img src={job.logo} alt="" />
        </a>
        <div>
          <h3>{job.role}</h3>
          {job.contract ? <p className={styles.context}>{job.contract}</p> : null}
          {job.context ? <p className={styles.context}>{job.context}</p> : null}
          {job.since ? (
            <p className={styles.since}>
              <span className={styles.badge}>
                <span className={styles.dot} aria-hidden="true" />
                Depuis le {job.since}
                <span className={styles.tenure}>{tenure(job.since)}</span>
              </span>
            </p>
          ) : null}
          {job.period && !job.since ? <p className={styles.period}>{job.period}</p> : null}
        </div>
      </div>
      <ul className={styles.grid}>
        {job.points.map((point) => (
          <li key={point.title}>
            <strong>{point.title}</strong>
            <span>{point.detail}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-titre">
      <h2 id="experience-titre">Expérience</h2>
      <div className={styles.list}>
        <Card job={profile.company} />
        {profile.previous.map((job) => (
          <Card key={job.name} job={job} />
        ))}
      </div>
    </section>
  )
}
