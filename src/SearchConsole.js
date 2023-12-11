const SearchConsole = (props) => {
    return (
        <form>
            <div className="searchConsole">
                <label htmlFor="search">Wyszukaj: </label>
                <input type="text" id="search" onChange={(e)=> props.filterData(e.target.value)}/>        
            </div>
        </form>
    )
}

export default SearchConsole;