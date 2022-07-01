import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";

// carousel
import "swiper/swiper.scss"
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/pagination/pagination.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
