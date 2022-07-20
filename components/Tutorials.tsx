import styles from '../styles/Tutorials.module.scss'
import Image from "next/image";
import {useEffect, useState} from "react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRouter} from "next/router";

const docs = ['docs/doc1.png', 'docs/doc2.png', 'docs/doc3.png', 'docs/doc4.png', 'docs/doc5.png', 'docs/doc6.png']

SwiperCore.use([Navigation, Pagination])

/**
 * Руководство по Гвинту
 *
 * @constructor
 */
const Tutorials = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(1)

    const imgPrefix = router.pathname.includes('tutorials') ? '/' : '/gvintgame/'

    return (
        <div className={styles.container + (router.pathname.includes('tutorials') ? ` ${styles.container__page}` : '')}>
            <h1 className={styles.title}>Руководство по Гвинту</h1>
            <div className={styles.carouselWrapper}>
                <a className={styles.prev} style={{cursor: currentSlide <= docs.length && currentSlide != 1 ? 'pointer' : 'default'}}>
                    <Image src={`${imgPrefix}prev-${currentSlide <= docs.length && currentSlide != 1 ? 'active' : 'disable'}.png`} alt="" width={"100px"} height={"50px"}/>
                </a>
                <Swiper slidesPerView={1} spaceBetween={0} initialSlide={0}
                        loop={false}
                        observer={true} observeParents={true}
                        onSlideChange={(e) => {
                            setCurrentSlide((window.innerWidth >= 1024 ? e.activeIndex : (e.activeIndex + 1)))
                        }}
                        pagination={false} navigation={{
                            nextEl: `.${styles.next}`,
                            prevEl: `.${styles.prev}`
                        }}
                        centeredSlides={true} centeredSlidesBounds={true}
                        className={styles.carousel}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}>
                    <SwiperSlide className={styles.mobileHide}></SwiperSlide>
                    {
                        docs.map((d, i) => {
                            return (
                                <SwiperSlide key={i} className={styles.carousel__item}>
                                    <div className={styles.carousel__item__shadow}>
                                        <img src={`/external/gvintgame/${d}`} alt=""/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperSlide className={styles.mobileHide}></SwiperSlide>
                </Swiper>
                <style jsx global>
                    {
                        `
                            .${styles.carousel} .swiper-slide-active .${styles.carousel__item__shadow} {
                                transform: scale(1);
                            }
                            .${styles.carousel} .swiper-slide-active .${styles.carousel__item__shadow}:after {
                                width: 0;
                                opacity: 0;
                            }
                        `
                    }
                </style>
                <a className={styles.next} style={{cursor: currentSlide < docs.length ? 'pointer' : 'default'}}>
                    <Image src={`${imgPrefix}next-${currentSlide < docs.length ? 'active' : 'disable'}.png`} alt="" width={"100px"} height={"50px"}/>
                </a>
                <h3 className={styles.number}>{(currentSlide) + '/' + docs.length}</h3>
            </div>
        </div>
    )
}

export default Tutorials
