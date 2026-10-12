'use client';

import { useMemo, useRef, useState } from 'react';
import Modal from '../modal/modal';
import styles from './style.module.scss';
import Sticker from '../svg/sticker';
import Tech from '../svg/tecnology';
import Fashion from '../svg/fashion';
import Fitness from '../svg/fitness';
import Health from '../svg/health';
import Tools from '../svg/tools';
import Beverage from '../svg/beverage';
import Market from '../svg/market';

type Product = {
  productName: string;
  descriptionShort: string;
  price: number;
  photo: string;
};

const fallbackProducts: Product[] = [
  { productName: 'Iphone 11 Pro Max', descriptionShort: 'Iphone 11 PRO MAX BRANCO 1', price: 15000, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'IPHONE 13 MINI 1', descriptionShort: 'IPHONE 13 MINI 1', price: 9000, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'Iphone 11 PRO MAX BRANCO 2', descriptionShort: 'Iphone 11 PRO MAX BRANCO 2', price: 14990, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'IPHONE 13 MINI 2', descriptionShort: 'IPHONE 13 MINI 2', price: 12000, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'Iphone 11 PRO MAX BRANCO 3', descriptionShort: 'Iphone 11 PRO MAX BRANCO 3', price: 4550, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'IPHONE 13 MINI 3', descriptionShort: 'IPHONE 13 MINI 3', price: 38000, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'Iphone 11 PRO MAX BRANCO 4', descriptionShort: 'Iphone 11 PRO MAX BRANCO 4', price: 42000, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
  { productName: 'IPHONE 13 MINI 4', descriptionShort: 'IPHONE 13 MINI 4', price: 520, photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png' },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default function Main({ products }: { products: Product[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productsSliderRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => (products && products.length > 0 ? products.slice(0, 8) : fallbackProducts), [products]);

  const scrollProducts = (direction: -1 | 1) => {
    const slider = productsSliderRef.current;

    if (slider) {
      slider.scrollBy({
        left: direction * slider.clientWidth * 0.8,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.pageDiscount}>
        <div className={styles.pageDiscountInfo}>
          <img src="/images/blackfriday.png" alt="" />
          <strong>Venha conhecer nossas promoções</strong>
          <div className={styles.discountValue}>
            <span>50% Off</span>
            <p>nos produtos</p>
          </div>
          <button>Ver Produto</button>
        </div>
      </div>
      <div className={styles.categoryContent}>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryItems}>
            <Tech />
            <p className={styles.highlight}>Tecnologia</p>
          </div>
          <div className={styles.categoryItems}>
            <Market />
            <p>Supermercado</p>
          </div>
          <div className={styles.categoryItems}>
            <Beverage />
            <p>Bebidas</p>
          </div>
          <div className={styles.categoryItems}>
            <Tools />
            <p>Ferramentas</p>
          </div>
          <div className={styles.categoryItems}>
            <Health />
            <p>Saúde</p>
          </div>
          <div className={styles.categoryItems}>
            <Fitness />
            <p>Esportes e Fitness</p>
          </div>
          <div className={styles.categoryItems}>
            <Fashion />
            <p>Moda</p>
          </div>
        </div>
      </div>
      <div className={styles.pageShell}>
        <section className={styles.productsSection} aria-labelledby="products-title">
          <header className={styles.sectionHeader}>
            <h2 id="products-title" className={styles.sectionTitle}>Produtos relacionados</h2>
            <div className={styles.productsButtons}>
              <button className={styles.phone}>CELULAR</button>
              <button>ACESSÓRIOS</button>
              <button>TABLETS</button>
              <button>NOTEBOOKS</button>
              <button>TVS</button>
              <button>Ver todos</button>
            </div>
          </header>
          <div className={styles.productsCarousel}>
            <button
              type="button"
              className={`${styles.sliderButton} ${styles.previousButton}`}
              aria-label="Ver produtos anteriores"
              onClick={() => scrollProducts(-1)}
            >
              &#8249;
            </button>
            <div ref={productsSliderRef} className={styles.productsGrid} role="list" aria-label="Produtos relacionados">
              {items.map((product, index) => (
                <article key={`${product.productName}-${index}`} className={styles.productCard} role="listitem">
                  <button type="button" className={styles.cardButton} onClick={() => setSelectedProduct(product)}>
                    <div className={styles.imageBox}>
                      <img src={product.photo} alt={product.productName} />
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.productDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                      <span className={styles.oldPrice}>R$ 30,90</span>
                      <strong className={styles.price}>{formatCurrency(product.price)}</strong>
                      <span className={styles.installments}>
                        ou 2x de {formatCurrency(product.price / 2)} sem juros
                      </span>
                      <span className={styles.shipping}>Frete grátis</span>
                      <span className={styles.buyButton}>COMPRAR</span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            <button
              type="button"
              className={`${styles.sliderButton} ${styles.nextButton}`}
              aria-label="Ver próximos produtos"
              onClick={() => scrollProducts(1)}
            >
              &#8250;
            </button>
          </div>
        </section>
      </div>
      <div className={styles.collabCard}>
        <div className={styles.collabContent}>
          <img src="/images/productdisplay.png" alt="" />
          <div className={styles.collabGrid}>
            <strong>Parceiros</strong>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
        <div className={styles.collabContent}>
          <img src="/images/productdisplay.png" alt="" />
          <div className={styles.collabGrid}>
            <strong>Parceiros</strong>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
      </div>
      <div className={styles.pageShell}>
        <section className={styles.productsSection} aria-labelledby="products-title">
          <header className={styles.sectionHeader}>
            <h2 id="products-title" className={styles.sectionTitle}>Produtos relacionados</h2>
            <button type="button" className={styles.actionLink}>Ver todos</button>
          </header>
          <div className={styles.productsCarousel}>
            <button
              type="button"
              className={`${styles.sliderButton} ${styles.previousButton}`}
              aria-label="Ver produtos anteriores"
              onClick={() => scrollProducts(-1)}
            >
              &#8249;
            </button>
            <div ref={productsSliderRef} className={styles.productsGrid} role="list" aria-label="Produtos relacionados">
              {items.map((product, index) => (
                <article key={`${product.productName}-${index}`} className={styles.productCard} role="listitem">
                  <button type="button" className={styles.cardButton} onClick={() => setSelectedProduct(product)}>
                    <div className={styles.imageBox}>
                      <img src={product.photo} alt={product.productName} />
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.productDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                      <span className={styles.oldPrice}>R$ 30,90</span>
                      <strong className={styles.price}>{formatCurrency(product.price)}</strong>
                      <span className={styles.installments}>
                        ou 2x de {formatCurrency(product.price / 2)} sem juros
                      </span>
                      <span className={styles.shipping}>Frete grátis</span>
                      <span className={styles.buyButton}>COMPRAR</span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            <button
              type="button"
              className={`${styles.sliderButton} ${styles.nextButton}`}
              aria-label="Ver próximos produtos"
              onClick={() => scrollProducts(1)}
            >
              &#8250;
            </button>
          </div>
        </section>
      </div>
      <div className={styles.collabCard}>
        <div className={styles.collabContent}>
          <img src="/images/productdisplay.png" alt="" />
          <div className={styles.collabGrid}>
            <strong>Parceiros</strong>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
        <div className={styles.collabContent}>
          <img src="/images/productdisplay.png" alt="" />
          <div className={styles.collabGrid}>
            <strong>Parceiros</strong>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
      </div>
      <div className={styles.brandNav}>
        <p>Navegue por marcas</p>
        <div className={styles.brandStickerRow}>
          <Sticker />
          <Sticker />
          <Sticker />
          <Sticker />
          <Sticker />
        </div>
      </div>
      <div className={styles.pageShell}>
        <section className={styles.productsSection} aria-labelledby="products-title">
          <header className={styles.sectionHeader}>
            <h2 id="products-title" className={styles.sectionTitle}>Produtos relacionados</h2>
            <button type="button" className={styles.actionLink}>Ver todos</button>
          </header>
          <div className={styles.productsCarousel}>
            <button
              type="button"
              className={`${styles.sliderButton} ${styles.previousButton}`}
              aria-label="Ver produtos anteriores"
              onClick={() => scrollProducts(-1)}
            >
              &#8249;
            </button>
            <div ref={productsSliderRef} className={styles.productsGrid} role="list" aria-label="Produtos relacionados">
              {items.map((product, index) => (
                <article key={`${product.productName}-${index}`} className={styles.productCard} role="listitem">
                  <button type="button" className={styles.cardButton} onClick={() => setSelectedProduct(product)}>
                    <div className={styles.imageBox}>
                      <img src={product.photo} alt={product.productName} />
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.productDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                      <span className={styles.oldPrice}>R$ 30,90</span>
                      <strong className={styles.price}>{formatCurrency(product.price)}</strong>
                      <span className={styles.installments}>
                        ou 2x de {formatCurrency(product.price / 2)} sem juros
                      </span>
                      <span className={styles.shipping}>Frete grátis</span>
                      <span className={styles.buyButton}>COMPRAR</span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            <button
              type="button"
              className={`${styles.sliderButton} ${styles.nextButton}`}
              aria-label="Ver próximos produtos"
              onClick={() => scrollProducts(1)}
            >
              &#8250;
            </button>
          </div>
        </section>
      </div>
      <section className={styles.newsletter}>
        <div className={styles.newsletterRow}>
          <strong>Inscreva-se na nossa newsletter</strong>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <div className={styles.newsletterRow}>
          <div className={styles.newsletterInput}>
            <input type="name" placeholder='Digite seu nome' />
            <input type="email" placeholder='Digite seu e-mail' />
            <button>INSCREVER</button>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p>Aceito os termos e condições</p>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}