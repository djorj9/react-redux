import { useSelector } from "react-redux";
import "./BookList.css";
const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.lenght === 0 ? (
        "Немає доступних книг"
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div className="book-info">
                {++i}. {book.title} від <strong> {book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
