import Account from '../svg/account';
import Cart from '../svg/cart';
import CreditCard from '../svg/creditCard';
import Crown from '../svg/crown';
import Favorite from '../svg/favorite';
import Logo from '../svg/logo';
import Purchase from '../svg/purchase';
import Search from '../svg/search';
import Shield from '../svg/shield';
import Truck from '../svg/truck';
import styles from './styles.module.scss';



export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarPromo}>
            <Shield />
            <p>Compra</p>
            <strong>100% segura</strong>
          </div>
          <div className={styles.topBarPromo}>
            <Truck />
            <strong>Frete grátis </strong>
            <p> acima de R$ 200</p>
          </div>
          <div className={styles.topBarPromo}>
            <CreditCard />
            <strong>Parcele</strong>
            <p>suas compras</p>
          </div>
          <div className={styles.topBarPromo} aria-hidden="true">
            <Shield />
            <p>Compra</p>
            <strong>100% segura</strong>
          </div>
          <div className={styles.topBarPromo}>
            <Truck />
            <strong>Frete grátis </strong>
            <p> acima de R$ 200</p>
          </div>
          <div className={styles.topBarPromo}>
            <CreditCard />
            <strong>Parcele</strong>
            <p>suas compras</p>
          </div>
        </div>
      </div>

      <div className={styles.menuWrap}>
        <div className={styles.brandBox}>
          <div className={styles.logo}><Logo /></div>
        </div>

        <div className={styles.searchBoxWrap}>
          <label className={styles.searchBox} aria-label="O que você está buscando?">
            <input type="text" placeholder="O que você está buscando?" />
            <Search />
          </label>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.actionButton}>
            <Purchase />
          </button>
          <button type="button" className={styles.actionButton}>
            <Favorite />
          </button>
          <button type="button" className={styles.actionButton}>
            <Account />
          </button>
          <button type="button" className={styles.actionButton}>
            <Cart />
          </button>
        </div>
      </div>
      <div className={styles.navContent}>
        <nav>
          <div className={styles.navrow}>
            <div className={styles.navLinks}>
              <a href="">TODAS AS CATEGORIAS</a>
              <a href="">SUPERMERCADO</a>
              <a href="">LIVROS</a>
              <a href="">MODA</a>
              <a href="">LANÇAMENTOS</a>
              <a className={styles.offers} href="">OFERTAS DO DIA</a>
              <a href=""><Crown />ASSINATURA</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}