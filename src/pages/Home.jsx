import { useState } from "react";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import SortButtons from "../components/SortButtons";

function Home({ posts }) {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "newest") return new Date(b.created_at) - new Date(a.created_at);
    if (sortOption === "upvotes") return b.upvotes - a.upvotes;
    return 0;
  });

  return (
    <div className="home-container">
      <div className="page-controls">
        <SearchBar query={query} setQuery={setQuery} />
        <SortButtons setSortOption={setSortOption} />
      </div>

      <PostList posts={sorted} />
    </div>
  );
}

export default Home;
