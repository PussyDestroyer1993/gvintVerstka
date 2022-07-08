import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/Layout.module.scss'
import {useRouter} from "next/router";

interface LayoutProps {
    children: React.ReactChild;
}

const Layout = (props: LayoutProps) => {
    const router = useRouter();

    return (
        <div className={`${styles.container} ${router.pathname == '/404' ? styles.geraltBack : ''}`}>
            <Header/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout