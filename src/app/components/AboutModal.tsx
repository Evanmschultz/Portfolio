'use client'

import Modal from './Modal';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About - Evan Schultz">
      <div className="about-container">
        <p>
          I am a full-stack software engineer with a passion for backend development and a knack for solving complex problems.
        </p>
        <p>
          My journey into software engineering is rooted in my background in physics, which I studied at Embry-Riddle in Prescott, Arizona. 
          This foundation has shaped my approach to coding, allowing me to leverage analytical thinking and problem-solving skills to create effective
          solutions for novel challenges.
        </p>
        <p>
          While I'm proficient in various languages including HTML, CSS, JavaScript, TypeScript, Python, Go, and Rust, my true coding love lies in Python. 
          That said, I have a growing appreciation for strongly typed languages, which aligns with my commitment to writing robust and maintainable code.
        </p>
        <p>
          My experience spans a wide range of technologies and frameworks, including FastAPI, Flask, Gin, Langchain, LlamaIndex, and Next.js. 
          I'm particularly passionate about AI (especially Large Language Models), API development, and creating developer tools that empower other engineers.
        </p>
        <p>
          As a co-founder of Dlivr, a SaaS startup that provided delivery and direct marketing solutions for restaurants, I honed my skills in adaptive fast 
          development and learned valuable lessons about product-market fit. This experience fueled my aspiration to help dynamic, early-stage startups bring 
          innovative solutions to life.
        </p>
        <p>
          My approach to software engineering is guided by principles such as Test-Driven Development (TDD), extensible design, and effective communication. 
          I believe in writing clean, efficient code that not only solves immediate problems but also anticipates future needs. 
          I'm also a strong advocate for continuous learning and staying updated with the latest industry trends.
        </p>
          <p>
          Outside of coding, I'm deeply interested in mathematics and physics, which often inspire my problem-solving strategies in software development. 
          I'm also an active contributor to open-source projects, having made contributions to ChromaDB and Langchain, and I enjoy building my own open-source 
          solutions.
        </p>
        <p>
          I'm always excited about new challenges and opportunities to create impactful software solutions. 
          If you're working on a project that aims to push boundaries and make a difference, I'd love to connect!
        </p>
      </div>
    </Modal>
  );
}