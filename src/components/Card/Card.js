import './Card.scss'

const Card = (props) => {
    const { monster } = props
    return (
        <li className="card-container">
            <figure className="card-container__image">
                <img src={`https://robohash.org/${monster.id}?set=set3&size=300x300`} alt="monster"/>
                <figcaption className="card-container__data">
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card