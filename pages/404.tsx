import type {NextPage} from 'next'
import Link from "next/link";
import Image from "next/image";
import s from "../styles/404.module.scss"
/**
 * Cards page
 *
 * @constructor
 */
const Page404: NextPage = () => {
    return (
        <div className={s.container}>
            <h1>Ошибка 404</h1>
            <p>Такой страницы не существует</p>
            <Link href="/">
                <a>
                    <Image src="/common/to_main.png" alt="" width={"208px"} height={"48px"}/>
                </a>
            </Link>
        </div>
    )
}

export default Page404