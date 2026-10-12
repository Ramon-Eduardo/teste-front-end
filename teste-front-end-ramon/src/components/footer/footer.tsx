import Facebook from '../svg/facebook';
import Instagram from '../svg/instagram';
import Linkedln from '../svg/lInkedln';
import Logo from '../svg/logo';
import styles from './style.module.scss';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <Logo />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.socials}>
            <a href="www.instagram.com"><Instagram /></a>
            <a href="www.instagram.com"><Facebook /></a>
            <a href="www.instagram.com"><Linkedln /></a>
          </div>
        </div>

        <div className={styles.linkBlock}>
          <div className={styles.linkGrid}>
            <p>Institucional</p>
            <a href="">Sobre Nós</a>
            <a href="">Movimento</a>
            <a href="">Trabalhe Conosco</a>
          </div>
          <div className={styles.linkGrid}>
            <p>Ajuda</p>
            <a href="">Suporte</a>
            <a href="">Fale Conosco</a>
            <a href="">Perguntas Frequentes</a>
          </div>
          <div className={styles.linkGrid}>
            <p>Termos</p>
            <a href="">Termos e Condições</a>
            <a href="">Política de Privacidade</a>
            <a href="">Troca e Devolução</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>

  );
}