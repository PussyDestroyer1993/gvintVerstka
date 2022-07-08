import {Swiper, SwiperSlide} from "swiper/react";
import s from "../styles/gallery.module.scss";
import {useRouter} from "next/router";
import {useState} from "react";
import Image from "next/image";

const docs = ['gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png',
    'gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png']

/**
 * Страница с галереей фотографий
 *
 * @constructor
 */
function GalleryPage(): JSX.Element{
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(1)

    const imgPrefix = router.pathname.includes('gallery') ? '/' : '/gvintgame/'

    const next = (e: any) => {
        const nextSlide = currentSlide + 1
        if (nextSlide > docs.length) return
        setCurrentSlide(nextSlide)
    }
    
    const prev = (e: any) => {
        const nextSlide = currentSlide - 1
        if (nextSlide < 1) return
        setCurrentSlide(nextSlide)
    }

  return (
      <div className={s.container + (router.pathname.includes('gallery') ? ` ${s.container__page}` : '')}>
        <h1 className={s.title}>Галерея</h1>
        <div className={s.carouselWrapper}>
            <a onClick={e => prev(e)} className={s.prev} style={{cursor: currentSlide <= docs.length && currentSlide != 1 ? 'pointer' : 'default'}}>
                <Image src={`${imgPrefix}prev-${currentSlide <= docs.length && currentSlide != 1 ? 'active' : 'disable'}.png`} alt="" width={"100px"} height={"50px"}/>
            </a>
            <Swiper slidesPerView={1} spaceBetween={0} initialSlide={currentSlide}
                    loop={false}
                    observer={true} observeParents={true}
                    pagination={false}
                    onSlideChange={(e) => {
                        setCurrentSlide(e.activeIndex)
                    }}
                    navigation={{
                        nextEl: `.${s.next}`,
                        prevEl: `.${s.prev}`
                    }}
                    centeredSlides={true} centeredSlidesBounds={true}
                    className={s.carousel}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}>
                <SwiperSlide className={s.mobileHide}>
                </SwiperSlide>
                {
                    docs.map((d, i) => {
                        return (
                            <SwiperSlide key={i} className={s.carousel__item}>
                                <div className={s.carousel__item__zoom}>
                                    <img src={`/external/gvintgame/${d}`} alt=""/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <SwiperSlide className={s.mobileHide}>
                </SwiperSlide>
            </Swiper>
            <style jsx global>
                {
                    `
                       .${s.carousel} .swiper-slide-active .${s.carousel__item__zoom} {
                           transform: scale(1);
                       }
                    `
                }
            </style>
            <a onClick={e => next(e)} className={s.next} style={{cursor: currentSlide < docs.length ? 'pointer' : 'default'}}>
                <Image src={`${imgPrefix}next-${currentSlide < docs.length ? 'active' : 'disable'}.png`} alt="" width={"100px"} height={"50px"}/>
            </a>
            <h3 className={s.number}>{(currentSlide) + '/' + docs.length}</h3>
        </div>
      </div>
  )
}

export default GalleryPage
