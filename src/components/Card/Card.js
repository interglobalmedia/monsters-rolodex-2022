import classes from './Card.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Card = (props) => {
    const { monster } = props
    return (
        <li className={`${classes["card-container"]} ${props.className}}`}>
            <figure className={`${classes["card-container__image"]} ${props.className}`}>
                <LazyLoadImage
                    src={`https://robohash.org/${monster.id}?set=set3`} alt="monster"
                    effect="blur"
                />
                <figcaption className={`${classes["card-container__data"]} ${props.className}`}>
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card