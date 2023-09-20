import React from "react";
import BookCard from "@/components/BookCard";
import "./Books.css";
const getBookList = async () => {
  const rest = await fetch(
    "https://www.etnassoft.com/api/v1/get/?num_items=100"
  );
  const data = await rest.json();
  return data;
};

const BookList = async () => {
  const books = await getBookList();
  return (
    <div className='grid'>
      {books.map(book => (
        <BookCard key={book.ID} book={book} />
      ))}
    </div>
  );
};

export default BookList;
