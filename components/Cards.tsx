import styles from '../styles/Cards.module.scss'
import Image from "next/image";
import cards from "../public/Cards.json";
import {useRouter} from "next/router";
import GalleryPage from "../pages/gallery";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import { Scrollbar } from "react-scrollbars-custom";

interface CardsProps {
    showGallery: boolean,
}

SwiperCore.use([Navigation, Pagination])

/**
 * Колоды
 *
 * @constructor
 */
const Cards = (props: CardsProps) => {

    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(1)

    const goto = (e: any, anchor: string) => {
        e.preventDefault()
        //@ts-ignore
        const itemPosition = document.getElementById(anchor) ? (document.getElementById(anchor).offsetTop - 60) : undefined
        window.scrollTo({
            top: itemPosition,
            behavior: "smooth"
        });
    }

    const imgPrefix = router.pathname == '/' ? '/gvintgame/' : '/'

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
                                    <Image src={`${imgPrefix}${c.name}/${c.name}.png`} alt={c.name} width={"326px"}
                                           height={"642"}/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.mobileShow}>
                <Swiper slidesPerView={1} spaceBetween={20} initialSlide={0}
                        loop={false}
                        observer={true} observeParents={true}
                        onSlideChange={(e) => {
                            setCurrentSlide(e.activeIndex)
                        }}
                        pagination={false} navigation={{
                    nextEl: `.${styles.next}`,
                    prevEl: `.${styles.prev}`
                }}
                        centeredSlides={true} centeredSlidesBounds={true}
                        className={styles.carousel}>
                    {
                        cards.map((c, i) => {
                            return (
                                <SwiperSlide key={i} className={styles.carousel__item}>
                                    <div>
                                        <a onClick={e => goto(e, c.name)} className={styles.group}>{c.title}</a>
                                        <a onClick={e => goto(e, c.name)}>
                                            <Image src={`${imgPrefix}${c.name}/${c.name}.png`} alt={c.name} width={220} height={390}/>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className={styles.carousel__control}>
                    <a className={styles.prev} style={{cursor: currentSlide <= cards.length && currentSlide != 1 ? 'pointer' : 'default'}}>
                        <Image src={`${imgPrefix}prev-${currentSlide <= cards.length && currentSlide != 1 ? 'active' : 'disable'}.png`} alt="" width={"100px"} height={"50px"}/>
                    </a>
                    <a className={styles.next} style={{cursor: currentSlide < cards.length ? 'pointer' : 'default'}}>
                        <Image src={`${imgPrefix}next-${currentSlide < cards.length ? 'active' : 'disable'}.png`} alt="" width={"100px"} height={"50px"}/>
                    </a>
                </div>
            </div>
            { props.showGallery && <GalleryPage />}
            { cards.map((c, i) => {
                return (
                    <div key={`0-${i}`}>
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
                    </div>
                )
            }) }
        </div>
    )
}

export default Cards
