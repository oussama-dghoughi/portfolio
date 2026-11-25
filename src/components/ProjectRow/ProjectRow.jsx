import styles from './ProjectRow.module.css'

export function ProjectRow({ project, open, onSelect }) {
  return (
    <button
      type="button"
      className={open ? `${styles.row} ${styles.open}` : styles.row}
      aria-current={open ? 'true' : undefined}
      onClick={() => onSelect(project.id)}
    >
      <span className={styles.index}>{project.index}</span>
      <span className={styles.copy}>
        <span className={styles.name}>{project.name}</span>
        <span className={styles.summary}>{project.summary}</span>
      </span>
    </button>
  )
}
