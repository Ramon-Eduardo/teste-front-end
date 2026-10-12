import Header from '@/components/header/header';
import Main from '@/components/main/main';
import Footer from '@/components/footer/footer';
import styles from './style.module.scss';

export const dynamic = 'force-dynamic';

const PRODUCT_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

async function getProducts() {
  try {
    const response = await fetch(PRODUCT_URL, { cache: 'no-store' });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return Array.isArray(data?.products) ? data.products : [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}
