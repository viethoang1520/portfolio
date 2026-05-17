import { motion, useReducedMotion } from 'framer-motion'
import experience from '@/data/experience'
import './Timeline.scss'

function Timeline() {
  const shouldReduceMotion = useReducedMotion()
  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Experience</span>
          <h2>Career timeline</h2>
          <p>
            A snapshot of the roles and projects that shaped my approach to backend systems
            and product delivery.
          </p>
        </div>
        <div className="timeline-track">
          <span className="timeline-line" aria-hidden="true"></span>
          <div className="timeline-grid">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index === 0 ? 'is-featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut', delay: index * 0.05 }}
              >
                <div className="timeline-node" aria-hidden="true"></div>
                <div className="timeline-card">
                  <div className="timeline-top">
                    <span>{item.period}</span>
                    <div className="timeline-role">
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="timeline-stack">
                    {item.stack.map((stackItem, stackIndex) => (
                      <span key={stackIndex}>{stackItem}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
