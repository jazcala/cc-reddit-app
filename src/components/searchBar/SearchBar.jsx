import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../features/search/searchSlice";
import SearchResults from "../searchResults/SearchResults";
function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = () => {
    dispatch(fetchSearchResults(query));
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <>
      <div className="col-10 col-lg-11 m-0 p-0">
        <div className="input-group w-100">
          <input
            className="form-control"
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Search"
          />
          <button onClick={handleSearch} className="btn btn-secondary col-2">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <SearchResults results={results} />
    </>
  );
}

export default SearchBar;
