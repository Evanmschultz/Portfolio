'use client'

import Modal from './Modal';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Projects">
      <div className="projects-container">
        <a href="https://github.com/evanmschultz/fenec" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <h3>Fenec</h3>
            <hr className="fade-in"/>
            <p>
              Fenec is an experimental Python library aimed at enhancing code comprehension and interaction through the use of Large Language Models (LLMs). 
              It's like having a tiny, incompetent, know-it-all fox rummaging through your codebase. Occasionally, it provides insights—either through its 
              genuine insights or its absurd answers.
            </p>
          </div>
        </a>
        <a href="https://github.com/evanmschultz/conag" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <h3>conag</h3>
            <hr className="fade-in"/>
            <p>
              conag is a simple rust based, macOS-only CLI tool designed to aggregate the contents of a project directory. It is useful for collecting code and documentation to use as context with UI based Large Language Models (LLMs).
            </p>
          </div>
        </a>
        <a href="https://github.com/evanmschultz/portfolio" target="_blank" rel="noopener noreferrer">
          <div className="project-card with-image">
            <img src="/assets/PostulateChat.GIF" alt="Postulate Chat"/>
            <div className="project-card-content">
              <h3>Postulate Chat</h3>
              <hr className="fade-in"/>
              <p>
                Postulate Chat is an AI chatbot application built using Flask. It employs Langchain for conversational logic, ChromaDB for document storage, and OpenAI for natural language processing. The application comes with login and registration features, protecting the chat routes.
              </p>
            </div>
          </div>
        </a>
      </div>
    </Modal>
  );
}