import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/Layout.module.scss'

interface LayoutProps {
    children: React.ReactChild;
}

const Layout = (props: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Header/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout