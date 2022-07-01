import styles from '../styles/Cards.module.scss'
import Image from "next/image";
import cards from "../public/Cards.json";
import {useRouter} from "next/router";
import GalleryPage from "../pages/gallery";

interface CardsProps {
    showGallery: boolean,
}

/**
 * Колоды
 *
 * @constructor
 */
const Cards = (props: CardsProps) => {

    const router = useRouter();

    const goto = (e: any, anchor: string) => {
        e.preventDefault()
        window.scrollTo({
            top: document.getElementById(anchor)?.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <div className={router.pathname == '/' ? styles.mainPageHolder : ''}>
            <h1 className={styles.title}>Колоды</h1>
            <ul className={styles.groups}>
                {
                    cards.map((c, i) => {
                        return (
                            <li key={i}>
                                <a onClick={e => goto(e, c.name)} className={styles.group}>{c.title}</a>
                                <a onClick={e => goto(e, c.name)}>
                                    <Image src={`${router.pathname == '/' ? '/gvintgame' : ''}/${c.name}/${c.name}.png`} alt={c.name} width={"326px"}
                                           height={"642"}/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            { props.showGallery && <GalleryPage />}
            { cards.map((c, i) => {
                return (
                    <>
                        <h1 id={c.name} className={styles.cardTitle}>{c.title}</h1>
                        <div className={styles.cardTable}>
                            <div className={styles.cardTable__row + ' ' + styles.cardTable__row__header}>
                                <div className={styles.cardTable__row__img}>Внешний вид карты</div>
                                <div className={styles.cardTable__row__title}>Название</div>
                                <div className={styles.cardTable__row__power}>Сила</div>
                                <div className={styles.cardTable__row__ability}>Способность карты</div>
                            </div>
                            {
                                c.heroes.map((h, i) => {
                                    return (
                                        <div key={i} className={styles.cardTable__row}>
                                            <div className={styles.cardTable__row__img}>
                                                <img src={`/external/gvintgame/north/${h.card}.png`} alt={h.card}/>
                                            </div>
                                            <div className={styles.cardTable__row__title}><span>{h.name}</span></div>
                                            <div className={styles.cardTable__row__power}><span>{h.power ? h.power : <>&mdash;</>}</span></div>
                                            <div className={styles.cardTable__row__ability}><span>{h.ability}</span></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }) }
        </div>
    )
}

export default Cards
