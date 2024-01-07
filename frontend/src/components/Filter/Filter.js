import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const haandleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
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
        <button type="button" onClick={haandleResetFilters}>Очистити фільтр</button>
      </div>
    </div>
  );
};

export default Filter;
