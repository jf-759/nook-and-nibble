function SearchBar({ query, SetQuery }) {
    return (
        <input className="w-full p-2 border mb-4" placeholder="Search posts..." value={query} onChange={e => SetQuery(e.target.value)} />
    )
}

export default SearchBar