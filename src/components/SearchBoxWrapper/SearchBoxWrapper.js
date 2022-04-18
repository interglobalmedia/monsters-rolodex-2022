import './SearchBoxWrapper.scss'

const SearchBoxWrapper = (props) => {
    return (
        <fieldset className={props.className}>
            {props.children}
        </fieldset>
    )
}

export default SearchBoxWrapper