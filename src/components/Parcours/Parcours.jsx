import { profile } from '../../data/profile.js'
import styles from './Parcours.module.css'

export function Parcours() {
  return (
    <section id="parcours" className={styles.section} aria-labelledby="parcours-titre">
      <div className={styles.head}>
        <h2 id="parcours-titre">Parcours</h2>
        <p>Formation et spécialisations</p>
      </div>
      <ol className={styles.timeline}>
        {profile.education.map((item, index) => (
          <li key={item.school} className={styles.step}>
            <span className={styles.marker} aria-hidden="true">
              <span className={styles.dot} data-current={Boolean(item.status) || undefined} />
              {index < profile.education.length - 1 ? <span className={styles.line} /> : null}
            </span>
            <article className={styles.entry}>
              <div className={styles.meta}>
                <h3>{item.school}</h3>
                {item.period || item.status ? (
                  <p className={styles.period}>
                    {item.status ? (
                      <span className={styles.badge}>
                        <span className={styles.live} aria-hidden="true" />
                        {item.status}
                      </span>
                    ) : null}
                    {item.period ? <span>{item.period}</span> : null}
                  </p>
                ) : null}
              </div>
              <p className={styles.program}>{item.program}</p>
              <p className={styles.detail}>{item.detail}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
