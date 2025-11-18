function SortButtons({ setSortOption }) {
    return (
        <div className="flex gap-2 mb-4">
            <button onClick={() => setSortOption("newest")} className="px-3 py-1 bg-gray-200 rounded">Newest</button>
            <button onClick={() => setSortOption("upvotes")} className="px-3 py-1 bg-gray-200 rounded">Most Upvoted</button>
        </div>
    )
}

export default SortButtons