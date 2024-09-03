import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchProducts } from "../utils/ProjectAction"; // Ensure the path is correct
import { Link } from "react-router-dom";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Show suggestions only if there is some query
    if (query) {
      // Optionally, filter products based on the query
      const filteredSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(searchProducts(query));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    dispatch(searchProducts(searchQuery));
    setShowSuggestions(false); // Hide suggestions after searching
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    dispatch(searchProducts(product.name));
    setShowSuggestions(false); // Hide suggestions after selection
  };

  return (
    <>
      <div className="flex gap-6 m-3">
        <Link to="/add-product">
          <div className="cursor-pointer bg-blue-400 py-1 px-10 text-xl rounded-full h-fit hover:scale-105 hover:bg-green-950 text-white">
            + Add Products
          </div>
        </Link>
        <div className="cursor-pointer bg-white py-1 px-10 border text-xl h-fit rounded-full">
          {filteredProducts.length}/{products.length} Products
        </div>
      </div>
      <div className="search flex gap-3 ml-2 relative">
        <input
          type="text"
          className="border w-[40%] border-gray-400 rounded-lg p-2"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setShowSuggestions(true)} // Show suggestions when input is focused
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Hide suggestions after input loses focus
        />
        <button
          className="bg-blue-400 md:w-[10%] w-[20] text-white p-1 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
        {showSuggestions && searchQuery && (
          <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-10 w-[40%] z-10">
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((product) => (
                <div
                  key={product.id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(product)}
                >
                  {product.name}
                </div>
              ))}
            {products.filter((product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <div className="p-2 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
