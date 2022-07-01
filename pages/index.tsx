import type {NextPage} from 'next'
import Calendar from "../components/Calendar";
import Introduction from "../components/Introduction";
import Cards from "../components/Cards";
import Tutorials from "../components/Tutorials";

/**
 * Home page
 *
 * @constructor
 */
const HomePage: NextPage = () => {
    return (
        <>
            <Introduction/>
            <Calendar/>
            <Tutorials/>
            <Cards showGallery={true}/>
        </>
    )
}

export default HomePage
