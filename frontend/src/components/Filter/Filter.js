import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,

  setAuthoFilter, 
  selectAuthorFilter,

  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter
} from "../../redux/slices/filterSlice";
import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  const haandleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
   const haandleAuthorFilterChange = (e) => {
    dispatch(setAuthoFilter(e.target.value));
  };
  const haandleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };
  const haandleResetFilters = () => {
    dispatch(resetFilters());
  };
 
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Фільтр по назві..."
            onChange={haandleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Фільтр по автору..."
            onChange={haandleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
            type="checkbox"
            checked={onlyFavoriteFilter}
            onChange={haandleOnlyFavoriteFilterChange}
          /> Тільки вибрані
          </label>
          
        </div>
        <button type="button" onClick={haandleResetFilters}>Очистити фільтр</button>
      </div>
    </div>
  );
};

export default Filter;
