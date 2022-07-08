import styles from '../styles/Footer.module.scss';
import Image from 'next/image';
import {useRouter} from "next/router";
import Link from "next/link";

/**
 * Footer
 *
 * @constructor
 */
const Footer = () => {
    const router = useRouter();

    return (
        <footer className={`${styles.footer} mainColor`}>
            <div>
                <div>
                    <Image src={`${router.pathname == '/' ? '/gvintgame' : ''}/common/gvintgame.png`} alt="gvintgame" width={"354px"} height={"53px"}/>
                </div>
                <div>
                    <img className={styles.logo} src={'/external/gvintgame/logo.svg'} alt='logo' />
                </div>
                <div>
                    {router.pathname !== "/" && <Link href="/">Об игре</Link> }
                    {!router.pathname.includes("news") && <Link href="/news">Новости</Link> }
                    {!router.pathname.includes("calendar") && <Link href="/calendar">Календарь турниров</Link> }
                    {!router.pathname.includes("onlineRequest") && <Link href="/onlineRequest">Онлайн заявка</Link> }
                    {!router.pathname.includes("gallery") && <Link href="/gallery">Галерея</Link> }
                    {!router.pathname.includes("faq") && <Link href="/faq">FAQ</Link>}
                </div>
            </div>
            <p>Copyright © GвинтGame {new Date().getFullYear()}.</p>
        </footer>
    )
}

export default Footer