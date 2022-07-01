import { Scrollbar } from "react-scrollbars-custom";
import styles from '../styles/UpcomingTournaments.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";


/**
 * Ближайшие турниры
 *
 * @constructor
 */
const Calendar = () => {

    const router = useRouter();

    return (
        <>
            <h1 className={styles.title}>Ближайшие турниры</h1>
            <div className={styles.tournaments}>
                { !router.pathname.includes("calendar") ?
                    <Scrollbar style={{height: 320}} className={styles.scroll} maximalThumbSize={70}>
                        <Table />
                    </Scrollbar>
                    :
                    <Table />
                }
            </div>
        </>
    )
}

export default Calendar

interface Event {
    date: string,
    name: string,
}

const Table = () => {
    const router = useRouter();

    const events: Array<Event> = [
        {date: '1 мая', name: 'Событие №1'},
        {date: '2 мая', name: 'Событие №2'},
        {date: '3 мая', name: 'Событие №3'},
        {date: '4 мая', name: 'Событие №4'},
        {date: '5 мая', name: 'Событие №5'},
        {date: '6 мая', name: 'Событие №6'},
        {date: '7 мая', name: 'Событие №7'},
        {date: '8 мая', name: 'Событие №8'},
    ]

    return (
        <table>
            {
                events.map((e, i) => {
                    return (
                        <tr key={i}>
                            <td style={{borderRight: '1px solid #E0E0E0'}}>
                                {e.date}
                            </td>
                            <td>
                                <div>
                                    <Image src={`${router.pathname.includes('calendar') ? '' : '/gvintgame'}/gwent-open.png`} alt="" width={"49px"} height={"60px"}/>
                                    <span>{e.name}</span>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    )
}
