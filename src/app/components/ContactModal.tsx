'use client'

import Modal from './Modal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact">
      <div className="contact-container">
        <div className="email-link-container">
          <p>Feel free to reach out to me at:</p>
          <a href="mailto:evan@postulate.tech" className="email-link">evan@postulate.tech</a>
        </div>
        <hr className="fade-in"/>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
      </div>
    </Modal>
  );
}