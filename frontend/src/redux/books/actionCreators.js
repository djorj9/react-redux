import * as a from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};
export const deliteBook = (id) => {
  return {
    type: a.DELITE_BOOK,
    payload: id,
  };
};