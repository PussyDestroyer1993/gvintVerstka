import classes from '../styles/Header.module.scss'
import Link from "next/link"
import Logo from '../public/logo.svg'
import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";

const active = {
    color: "white",
    border: "solid",
    borderWidth: "0 0 4px",
    borderColor: '#eb6609',
    cursor: 'pointer',
}

const Header = () => {

    const [showSubMenu, setShowSubMenu] = useState(true)
    const [showBurgerMenu, setShowBurgerMenu] = useState(false)
    const router = useRouter();

    const subItemMenuClick = (e: any, link: string) => {
        router.push(`/${link}`)
        setShowSubMenu(false)
        setShowBurgerMenu(false)
    }


    return (
        <header className={classes.header}>
            <nav className={showBurgerMenu ? classes.mobileActive : ''}>
                <div className={classes.mobileBurger} onClick={e => setShowBurgerMenu(!showBurgerMenu)}><span>&nbsp;</span></div>
                <Link href="/"><a className={classes.logo}><img src={'/external/gvintgame/logo.svg'} alt='logo' /></a></Link>
                <div>
                    <Image src={`${router.pathname == '/' || router.pathname == '/404' ? '/gvintgame' : ''}/common/gvintgame.png`} alt="gvintgame" width={"354px"} height={"53px"}/>
                    <div className={classes.menuMain}>
                        <a onMouseOver={e => setShowSubMenu(true)}
                            style={router.pathname.includes("cards") || router.pathname.includes("docs") || router.pathname.includes("tutorials") ? active : {cursor: 'pointer'}}>
                            <span className={classes.mobileHide}>Об игре</span>

                            <div className={classes.subMenu} onMouseLeave={e => setShowSubMenu(false)} style={showSubMenu ? {display: 'flex'} : {display: 'none'}}>
                                <a onClick={e => subItemMenuClick(e, '')} style={router.pathname == '/' ? active : {}}>Об игре</a>
                                <a onClick={e => subItemMenuClick(e, 'tutorials')} style={router.pathname.includes("tutorials") ? active : {}}>Руководство по гвинту</a>
                                <a onClick={e => subItemMenuClick(e, 'cards')} style={router.pathname.includes("cards") ? active : {}}>Колоды</a>
                                <a onClick={e => subItemMenuClick(e, 'docs')} style={router.pathname.includes("docs") ? active : {}}>Документы</a>
                            </div>
                        </a>
                        <Link href="/news"><a onMouseOver={e => setShowSubMenu(false)} onClick={e => setShowBurgerMenu(false)} style={router.pathname.includes("news") ? active : {}}>Новости</a></Link>
                        <Link href="/calendar"><a onMouseOver={e => setShowSubMenu(false)} onClick={e => setShowBurgerMenu(false)} style={router.pathname.includes("calendar") ? active : {}}>Календарь турниров</a></Link>
                        <Link href="/onlineRequest"><a onMouseOver={e => setShowSubMenu(false)} onClick={e => setShowBurgerMenu(false)} style={router.pathname.includes("onlineRequest") ? active : {}}>Онлайн заявка</a></Link>
                        <Link href="/gallery"><a onMouseOver={e => setShowSubMenu(false)} onClick={e => setShowBurgerMenu(false)} style={router.pathname.includes("gallery") ? active : {}}>Галерея</a></Link>
                        <Link href="/faq"><a onMouseOver={e => setShowSubMenu(false)} onClick={e => setShowBurgerMenu(false)} style={router.pathname.includes("faq") ? active : {}}>FAQ</a></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header