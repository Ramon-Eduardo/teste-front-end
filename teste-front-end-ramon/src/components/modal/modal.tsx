'use client';

import { useEffect, useState } from 'react';
import styles from './style.module.scss'

type Product = {
  productName: string;
  descriptionShort: string;
  price: number;
  photo: string;
};

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default function Modal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar produto">
          ×
        </button>

        <div className={styles.grid}>
          <div className={styles.imageBox}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.content}>
            <h3 id="modal-title">{product.productName}</h3>
            <div className={styles.price}>{formatCurrency(product.price)}</div>
            <p className={styles.description}>
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
            <span className={styles.detailsLink}>
              Veja mais detalhes do produto &gt;
            </span>
            <div className={styles.actions}>
              <div className={styles.quantityControl} aria-label="Quantidade do produto">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                >
                  −
                </button>
                <span aria-live="polite">{String(quantity).padStart(2, '0')}</span>
                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity((current) => current + 1)}
                >
                  +
                </button>
              </div>
              <button type="button" className={styles.primaryButton}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
