import type {NextPage} from 'next'
import Cards from "../components/Cards";

/**
 * Cards page
 *
 * @constructor
 */
const CardsPage: NextPage = () => {
    return <Cards showGallery={false}/>
}

export default CardsPage