import { useState } from 'react'
import { projects } from '../../data/projects.js'
import { Fiche } from '../Fiche/Fiche.jsx'
import { ProjectRow } from '../ProjectRow/ProjectRow.jsx'
import styles from './Work.module.css'

const filters = [
  { id: 'tous', label: 'Tous' },
  { id: 'site', label: 'Site' },
  { id: 'extranet', label: 'Extranet' },
  { id: 'landing', label: 'Landing page' },
  { id: 'crm', label: 'CRM' },
  { id: 'mobile', label: 'App mobile' },
  { id: 'ia', label: 'IA' },
]

function matchesFilter(item, filter) {
  if (filter === 'tous') return true
  const kinds = item.kinds ?? (item.kind ? [item.kind] : [])
  return kinds.includes(filter)
}

export function Work() {
  const [filter, setFilter] = useState('tous')
  const [openId, setOpenId] = useState(projects[0].id)
  const visible = projects.filter((item) => matchesFilter(item, filter))
  const project = visible.find((item) => item.id === openId) ?? visible[0]

  return (
    <section id="projets" className={styles.section} aria-labelledby="projets-titre">
      <div className={styles.head}>
        <h2 id="projets-titre">Projets</h2>
        <p>Une fiche : description, stack, lien de production.</p>
      </div>
      <div className={styles.filters} role="tablist" aria-label="Type de projet">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            className={styles.filter}
            aria-selected={item.id === filter}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.board}>
        <div className={styles.index}>
          {visible.map((item) => (
            <ProjectRow
              key={item.id}
              project={item}
              open={item.id === project.id}
              onSelect={setOpenId}
            />
          ))}
        </div>
        <Fiche project={project} />
      </div>
    </section>
  )
}
