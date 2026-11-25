import { profile } from '../../data/profile.js'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>{profile.name}</p>
        <p>{profile.role}</p>
      </div>
    </footer>
  )
}
