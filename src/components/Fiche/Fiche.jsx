import { siAppstore, siGoogleplay } from 'simple-icons'
import styles from './Fiche.module.css'

const stackColor = {
  Angular: '#ff6b8a',
  Symfony: '#b8f2df',
  'API Platform': '#3dd6c6',
  MySQL: '#7eb6ea',
  'Next.js': '#f2f4f7',
  Prisma: '#a5b4fc',
  WordPress: '#6cb6e6',
  Twig: '#d5e57a',
  Docker: '#5eb6f6',
  Nginx: '#86d7a8',
  Stripe: '#b3a6ff',
  NLP: '#d7b4ff',
  OCR: '#f0c674',
  Grok: '#f2f4f7',
  Claude: '#e08a6d',
  Gemini: '#8ab4f8',
  PostgreSQL: '#7eb6ea',
  INSEE: '#8eb4e8',
  Pappers: '#9ec0ef',
  Ionic: '#6cb6ff',
  React: '#7ee0f2',
  Capacitor: '#8fceb0',
  'React Native': '#7ee0f2',
  Expo: '#f2f4f7',
}

const storeIcons = {
  appstore: siAppstore,
  googleplay: siGoogleplay,
}

function StoreIcon({ id }) {
  const icon = storeIcons[id]
  if (!icon) return null
  const fill = icon.hex.toLowerCase() === '000000' || icon.hex.toLowerCase() === '414141' ? '#E8ECF1' : `#${icon.hex}`
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.storeIcon}>
      <path d={icon.path} fill={fill} />
    </svg>
  )
}

export function Fiche({ project }) {
  return (
    <article className={styles.fiche} aria-label={project.name}>
      <header className={styles.header}>
        <p className={styles.meta}>{project.index}</p>
        <span className={styles.status}>{project.status}</span>
      </header>
      <img className={styles.logo} src={project.logo} alt="" />
      <h3>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      {project.steps ? (
        <ol className={styles.steps}>
          {project.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {project.highlights ? (
        <ul className={styles.highlights}>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {project.shots ? (
        <div className={styles.shotsBlock}>
          <p className={styles.label}>Aperçu</p>
          <ul className={styles.shots}>
            {project.shots.map((shot, index) => (
              <li key={shot}>
                <figure className={styles.phone}>
                  <img src={shot} alt={`${project.name} — écran ${index + 1}`} loading="lazy" />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {project.access ? (
        <div className={styles.access}>
          <p className={styles.label}>Accès</p>
          <ul>
            {project.access.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <ul className={styles.roles}>
        {project.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      <div className={styles.block}>
        <p className={styles.label}>Stack</p>
        <ul>
          {project.stack.map((item) => (
            <li key={item} style={{ '--stack': stackColor[item] ?? 'var(--accent)' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {project.url ? (
        <div className={styles.block}>
          <p className={styles.label}>Production</p>
          <a href={project.url}>{project.url.replace(/^https?:\/\//, '')}</a>
        </div>
      ) : null}
      {project.stores ? (
        <div className={styles.block}>
          <p className={styles.label}>Stores</p>
          <ul className={styles.stores}>
            {project.stores.map((store) => (
              <li key={store.name}>
                <a href={store.url} target="_blank" rel="noreferrer">
                  <StoreIcon id={store.logo} />
                  <span>{store.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  )
}
