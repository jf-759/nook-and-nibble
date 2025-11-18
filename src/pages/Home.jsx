import PostList from '../components/PostList'
import SearchBar from '../components/SearchBar'
import SortButtons from '../components/SortButtons'
import { useState } from 'react'

function Home({ posts }) {
    const [query, setQuery] = useState("")
    const [sortOption, setSortOption] = useState("newest")

    const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

    const sorted = [...filtered].sort((a, b) => {
        if (sortOption === "newest") return new Date(b.created_at) - new Date(a.created_at)
        if (sortOption === "upvotes") return b.upvotes - a.upvotes
    })

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <SearchBar query={query} setQuery={setQuery} />
            <SortButtons setSortOption={setSortOption} />
            <PostList posts={sorted} />
        </div>
    )
}

export default Home