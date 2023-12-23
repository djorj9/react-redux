import { useSelector,  useDispatch } from "react-redux";
import { deliteBook } from "../../redux/books/actionCreators";
import "./BookList.css";
const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch()

  const handlerBookId = (id) => {
   dispatch(deliteBook(id))
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
                {++i}. {book.title} від {' '}<strong> {book.author}</strong>
              </div>
              <div className="book-actions"><button onClick={() => handlerBookId(book.id)}>x</button></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
