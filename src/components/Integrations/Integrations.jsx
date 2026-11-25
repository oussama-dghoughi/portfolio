import { useState } from 'react'
import { toolGroups } from '../../data/tools.js'
import { Logo } from './logos.jsx'
import styles from './Integrations.module.css'

function fill(items) {
  const base = []
  while (base.length < 8) base.push(...items)
  return [...base, ...base]
}

export function Integrations() {
  const [groupId, setGroupId] = useState(toolGroups[0].id)
  const group = toolGroups.find((item) => item.id === groupId) ?? toolGroups[0]
  const loop = fill(group.items)

  return (
    <section id="outils" className={styles.section} aria-labelledby="outils-titre">
      <div className={styles.head}>
        <h2 id="outils-titre">Outils</h2>
      </div>
      <div className={styles.tabs} role="tablist" aria-label="Familles d'outils">
        {toolGroups.map((item) => {
          const selected = item.id === group.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={styles.tab}
              aria-selected={selected}
              onClick={() => setGroupId(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <p className={styles.srOnly}>{group.items.map((item) => item.name).join(', ')}</p>
      <div className={styles.viewport} aria-hidden="true">
        <ul key={group.id} className={styles.track}>
          {loop.map((item, index) => (
            <li key={`${item.logo}-${index}`}>
              <span className={styles.mark}>
                <Logo id={item.logo} />
              </span>
              <span className={styles.name}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
