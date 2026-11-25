import { siGmail } from 'simple-icons'
import { profile } from '../../data/profile.js'
import styles from './Hero.module.css'

function Glyph({ path, fill = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill={fill} />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.4 0 .7-.3 1L6.6 10.8z"
      />
    </svg>
  )
}

const contacts = [
  {
    label: 'Gmail',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Glyph path={siGmail.path} fill={`#${siGmail.hex}`} />,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: profile.linkedin,
    external: true,
    icon: (
      <Glyph
        fill="#0A66C2"
        path="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z"
      />
    ),
  },
  {
    label: 'Téléphone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: <PhoneIcon />,
  },
]

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div>
        <h1>
          <span className={styles.software}>Software</span> Engineer & IA
        </h1>
        <p className={styles.name}>{profile.name}</p>
        <p className={styles.pitch}>{profile.pitch}</p>
        <p className={styles.signals}>
          {profile.signals.map((signal, index) => (
            <span key={signal}>
              {index > 0 ? <span className={styles.sep} aria-hidden="true">·</span> : null}
              <span className={index === 0 ? styles.live : undefined}>{signal}</span>
            </span>
          ))}
        </p>
        <div className={styles.actions}>
          <a className={styles.cv} href={profile.cv} download="Oussama-Dghoughi-CV.pdf">
            Télécharger le CV
          </a>
          <a className={styles.mail} href={`mailto:${profile.email}`}>
            Me contacter
          </a>
        </div>
        <ul id="contact" className={styles.contacts}>
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                aria-label={`${item.label} : ${item.value}`}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                <span className={styles.icon}>{item.icon}</span>
                <strong>{item.value}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <figure className={styles.portrait}>
        <img src={profile.photo} alt="Oussama Dghoughi" width="800" height="800" />
        <figcaption>{profile.location}</figcaption>
      </figure>
    </section>
  )
}
