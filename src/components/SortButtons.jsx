import './SortButtons.css'

function SortButtons({ setSortOption }) {
  return (
    <div className="sort-buttons">
      <button className="sort-btn" onClick={() => setSortOption("newest")}>
        Newest
      </button>
      <button className="sort-btn" onClick={() => setSortOption("upvotes")}>
        Upvotes
      </button>
    </div>
  );
}

export default SortButtons;
