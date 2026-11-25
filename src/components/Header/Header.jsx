import { profile } from '../../data/profile.js'
import styles from './Header.module.css'

const links = [
  { href: '#experience', label: 'Expérience' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projets', label: 'Projets' },
  { href: '#outils', label: 'Outils' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.skip} href="#contenu">
        Aller au contenu
      </a>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className={styles.nav}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
