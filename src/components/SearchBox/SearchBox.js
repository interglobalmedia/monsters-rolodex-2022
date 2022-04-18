import SearchBoxWrapper from '../SearchBoxWrapper/SearchBoxWrapper'
import './SearchBox.scss'

const Input = (props) => {
    return (
        <SearchBoxWrapper className="fieldset">
            <h2>Search The Monsters!</h2>
            <input className="search-box" type="search" placeholder="search monsters" onInput={props.onInput} />
        </SearchBoxWrapper>
    )
}

export default Input