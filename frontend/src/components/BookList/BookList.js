import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { deliteBook, toggleFavorite} from "../../redux/books/actionCreators";
import "./BookList.css";
const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handlerBookId = (id) => {
    dispatch(deliteBook(id));
  };
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  }
  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <p>Немає доступних книг</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} від <strong> {book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={ () => handleToggleFavorite(book.id) }>{book.isFavorite ? (
                  <BsBookmarkStarFill className="star-icon" />
                ) : (
                  <BsBookmarkStar className="star-icon" />
                )}</span>
                
                <button onClick={() => handlerBookId(book.id)}>Видалити</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
