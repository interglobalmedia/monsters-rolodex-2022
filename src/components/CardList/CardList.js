import Card from '../Card/Card'
import './CardList.scss'

const CardList = (props) => {
    const { filteredMonsters } = props
    return (
        <ul>
          {filteredMonsters.map(monster => (<Card key={monster.id} monster={monster} />))}
        </ul>
    )
}

export default CardList