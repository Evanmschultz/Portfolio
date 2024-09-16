'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import AboutModal from '@/app/components/AboutModal'
import ProjectsModal from '@/app/components/ProjectsModal'
import ContactModal from '@/app/components/ContactModal'

const DynamicLorenzCanvas = dynamic(() => import('@/app/components/LorenzCanvas'), {
  ssr: false
})

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [animationStage, setAnimationStage] = useState(0)
  const HEADER_LINKS = ['about', 'projects', 'contact', "site's lorenz js"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      animateElements()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const animateElements = () => {
    const stages = HEADER_LINKS.length + 3; // +3 for the initial animations (logo, name, title)
    const stageDelay = 500

    for (let i = 0; i < stages; i++) {
      setTimeout(() => {
        setAnimationStage(i + 1)
      }, i * stageDelay)
    }
  }

  const handleModalOpen = (modalName: string) => {
    setActiveModal(modalName)
  }

  const handleModalClose = () => {
    setActiveModal(null)
  }

  return (
    <main className={`main ${isLoaded ? 'loaded' : ''}`}>
      <header className="site-header">
        <h1 className={`logo ${animationStage > 0 ? 'slide-in' : ''}`}>Postulate</h1>
        <h2 className={`logo ${animationStage > 1 ? 'slide-in' : ''}`}>Evan Schultz</h2>
        <p className={`logo ${animationStage > 2 ? 'slide-in' : ''}`}>Software Engineer</p>
        <hr className={animationStage > 3 ? 'fade-in' : ''} />
        <nav>
          <ul>
            {HEADER_LINKS.map((item, index) => (
              <li key={item} className={`link ${animationStage > index + 3 ? 'slide-in' : ''}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (item === "site's lorenz js") {
                      window.open('https://github.com/evanmschultz/Portfolio/blob/main/static/js/animation.js', '_blank')
                    } else {
                      handleModalOpen(item)
                    }
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <ul className={`ext-links ${animationStage > 4 ? 'slide-in' : ''}`}>
        <li className="ext-link">
          <a href="https://github.com/evanmschultz" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="github-logo" id="github" />
          </a>
        </li>
        <li className="ext-link">
          <a href="https://www.linkedin.com/in/evanmschultz/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="linkedin-logo" id="linkedin" />
          </a>
        </li>
      </ul>

      <DynamicLorenzCanvas />

      <AboutModal isOpen={activeModal === 'about'} onClose={handleModalClose} />
      <ProjectsModal isOpen={activeModal === 'projects'} onClose={handleModalClose} />
      <ContactModal isOpen={activeModal === 'contact'} onClose={handleModalClose} />
    </main>
  )
}