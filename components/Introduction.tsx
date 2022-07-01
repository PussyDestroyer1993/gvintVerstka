import styles from '../styles/Introduction.module.scss'
import s from '../styles/request.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";
import Dialog from "@material-ui/core/Dialog";
import {useState} from "react";
import {RequestForm} from "../pages/onlineRequest";

/**
 * Карточная игра по мотивам игры "Ведьмак"
 *
 * @constructor
 */
const Introduction = () => {

    const router = useRouter();
    const [formShow, setFormShow] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.imgHolder}/>
            <div className={styles.textHolder}>
                <h1 className={styles.h1}>Карточная игра по<br/> мотивам игры &quot;Ведьмак&quot;</h1>
                <p className={styles.p2}>Предварительные выводы неутешительны: базовый вектор развития выявляет
                    потребность приоритизации разума над эмоциями.</p>
                <a onClick={(e) => { e.preventDefault(); setFormShow(true)} } href="#">
                    <Image src="/gvintgame/play.png" alt="" width={"207px"} height={"47px"}/>
                </a>
            </div>
            <Dialog
                open={formShow}
                disableBackdropClick={false}
                disableEscapeKeyDown={false}
                keepMounted
                onClose={() => { setFormShow(false) }}
                scroll={"body"}
                fullWidth={true}
                maxWidth={"md"}
                className={s.dialogParent}>
                <div className={s.dialogContainer}>
                    <div className={s.dialogContainer__close} onClick={ e => setFormShow(false)}/>
                    <RequestForm />
                </div>
            </Dialog>
        </div>
    )
}

export default Introduction
