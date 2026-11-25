import { profile } from '../../data/profile.js'
import styles from './Certifications.module.css'

export function Certifications() {
  return (
    <section id="certifications" className={styles.section} aria-labelledby="certifications-titre">
      <div className={styles.head}>
        <h2 id="certifications-titre">Certifications</h2>
        <p>Licences & certifications</p>
      </div>
      <ul className={styles.list}>
        {profile.certifications.map((item) => (
          <li key={item.name} className={styles.item}>
            <a
              className={styles.link}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.name} — voir le certificat`}
            >
              <span className={styles.logo}>
                <img src={item.logo} alt="" />
              </span>
              <span className={styles.main}>
                <strong>{item.name}</strong>
                <span className={styles.issuer}>{item.issuer}</span>
              </span>
              <span className={styles.issued}>Issued {item.issued}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
