import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import createBookWithId from "../../utils/createBookWithId";
import { addBook } from "../../redux/slices/booksSlice";
import booksData from "../../data/books.json";
import "./BookForm.css";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(addBook(createBookWithId(randomBook)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author })));
      setTitle("");
      setAuthor("");
    }
  };
  const handleAddRandomBookViaAPI = async () => {
    try {
      const res = await axios.get("http://localhost:4000/random-book");
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithId(res.data)));
      }
    } catch (error) {
      console.log("Помилка запиту axios", error);
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Додати нову книгу</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Нaзва:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Автор:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Добавити книгу</button>
        <button type="button" onClick={handleAddRandomBook}>
          Добавити випадкову книгу
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          Добавити випадкову книгу з Апі
        </button>
      </form>
    </div>
  );
};

export default BookForm;
