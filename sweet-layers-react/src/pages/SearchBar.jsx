function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort
}) {
  return (
    <section className="Menugrid container">
<div className="feature">

      <div className="searchBar">
        <input
          type="text"
          id="Search" 
          className="txtSearch"
          placeholder="Search cakes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filterSection">

        <select
          className="filterSelect"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Cupcake">Cupcake</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <select
          className="filterSelect"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By Price</option>
          <option value="lowToHigh">
            Price: Low to High
          </option>
          <option value="highToLow">
            Price: High to Low
          </option>
        </select>

      </div>

    </div>
    </section>
    
  );
}

export default SearchBar;