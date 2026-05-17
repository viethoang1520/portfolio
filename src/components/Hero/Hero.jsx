import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import './Hero.scss'
import Button from '@/components/Button/Button.jsx'
import image from '@/assets/images/avatar.jpg'
import cv from '@/assets/cv.pdf'
import { div } from 'framer-motion/client'
function Hero({ children }) {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  }

  return (

    <section id='home' className="hero">
      <div className="hero-background" aria-hidden="true">
        <span className="hero-orb orb-1"></span>
        <span className="hero-orb orb-2"></span>
        <span className="hero-orb orb-3"></span>
      </div>
      <div className='container hero-grid'>
        <motion.div
          className='hero-text'
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
        >
          <div className="hero-kicker">
            <span className="hero-pill">Backend Developer</span>
            <span className="hero-pill outline">Open to Work</span>
          </div>
          <h1 className="hero-title">
            Building resilient systems
            <span className="hero-highlight"> with cinematic polish</span>
          </h1>
          <p className="hero-subtitle">
            I design and ship backend-first products with a focus on scalable architecture,
            clean APIs, and premium user experiences. Every project here is treated like a
            real product launch.
          </p>
          <div className="hero-actions">
            <a href="#project" className="hero-primary">
              View selected work
              <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" height="20" />
            </a>
            <Button
              content='Download CV'
              icon='material-symbols:download'
              variant='ghost'
              href={cv}
              download='Dinh-Viet-Hoang-NodeJS-Developer.pdf'
            />
          </div>
          <div className="hero-meta">
            <div className="hero-stat">
              <h4>6+</h4>
              <span>Production projects</span>
            </div>
            <div className="hero-stat">
              <h4>1</h4>
              <span>Capstone project</span>
            </div>
            <div className="hero-stat">
              <h4>2+</h4>
              <span>Realtime systems</span>
            </div>
          </div>
          <div className="hero-social">
            <a href="https://github.com/viethoang1520/" aria-label="GitHub" target="_blank" rel="noreferrer">
              <Icon icon="mdi:github" width="20" height="20" />
              GitHub
            </a>
            <a href=" https://www.linkedin.com/in/hoang-dinh-viet-699385257" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Icon icon="mdi:linkedin" width="20" height="20" />
              LinkedIn
            </a>
            <a href="mailto:viethoang1520.dev@example.com" aria-label="Email" target="_blank" rel="noreferrer">
              <Icon icon="material-symbols:mail-outline" width="20" height="20" />
              Email
            </a>
          </div>
        </motion.div>
        <motion.div
          className='hero-media'
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="media-card">
            <div className="media-frame">
              <img src={image} alt="Portrait of Viet Hoang" />
            </div>
            <div className="media-glow"></div>
            <div className="media-float">
              <span className="float-pill">API Design</span>
              <span className="float-pill">System Architecture</span>
              <span className="float-pill">Realtime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;