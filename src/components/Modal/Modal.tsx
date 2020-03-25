import React, { FC, useEffect, useRef } from 'react';
import './Modal.scss';

interface Props {
  onClose(): void;
  x: number;
  y: number;
}

export const Modal: FC<Props> = ({
  onClose,
  x,
  y,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="modal__backdrop">
      <div
        className="modal__wrapper"
        ref={ref}
        style={{ top: `${x + 10}px`, left: `${y - 100}px` }}
      >
        <button type="button" className="modal__close" onClick={onClose}>close</button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};
