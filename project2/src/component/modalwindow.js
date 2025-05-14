import React from 'react';

export default function ModalWindow({ title, image, description, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
