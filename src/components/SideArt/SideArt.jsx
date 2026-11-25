import { useEffect, useRef } from 'react'
import styles from './SideArt.module.css'

const nodes = [
  { x: 28, y: 12 },
  { x: 62, y: 22 },
  { x: 18, y: 38 },
  { x: 48, y: 48 },
  { x: 78, y: 42 },
  { x: 32, y: 68 },
  { x: 68, y: 72 },
  { x: 22, y: 88 },
  { x: 58, y: 92 },
]

const links = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 5],
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 6],
  [5, 7],
  [5, 6],
  [6, 8],
  [7, 8],
]

/** Ce que je construis — métier, pas techno. */
const leftStream = [
  'APPS MÉTIER',
  'API',
  'CRM',
  'MOBILE',
  'AUTOMATISATION',
  'BACK OFFICE',
  'INTÉGRATIONS',
  'PRODUCTION',
  'OCR / IA',
  'PLANNING',
  'DOCUMENTS',
  'LIVRAISON',
]

/** Stack et outils — techno. */
const rightStream = [
  'SYMFONY',
  'ANGULAR',
  'REACT',
  'NEST',
  'DOCKER',
  'STRIPE',
  'N8N',
  'EASYADMIN',
  'MYSQL',
  'OPENAI',
  'TEAMS UP',
  'CAPACITOR',
]

function Network({ mirror }) {
  return (
    <svg
      className={styles.network}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={mirror ? { transform: 'scaleX(-1)' } : undefined}
    >
      {links.map(([a, b], index) => (
        <line
          key={`${a}-${b}`}
          className={styles.link}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          style={{ animationDelay: `${index * 0.18}s` }}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={`${node.x}-${node.y}`} className={styles.node} style={{ animationDelay: `${index * 0.22}s` }}>
          <circle cx={node.x} cy={node.y} r="1.6" className={styles.core} />
          <circle cx={node.x} cy={node.y} r="4.2" className={styles.halo} />
        </g>
      ))}
    </svg>
  )
}

function WordStream({ words, reverse }) {
  const loop = [...words, ...words]
  return (
    <div className={`${styles.stream} ${reverse ? styles.streamReverse : ''}`} aria-hidden="true">
      <div className={styles.streamTrack}>
        {loop.map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </div>
  )
}

export function SideArt() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      root.style.setProperty('--mx', x.toFixed(3))
      root.style.setProperty('--my', y.toFixed(3))
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      <div className={styles.rail}>
        <div className={styles.orb} />
        <Network />
        <WordStream words={leftStream} reverse />
        <p className={styles.caption}>ce que je construis</p>
      </div>
      <div className={`${styles.rail} ${styles.railRight}`}>
        <div className={`${styles.orb} ${styles.orbRight}`} />
        <Network mirror />
        <WordStream words={rightStream} />
        <p className={styles.caption}>avec quoi je construis</p>
      </div>
    </div>
  )
}
