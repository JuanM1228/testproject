import React, { Suspense } from "react";
import BookList from "../page";
import "./BookDetails.css";
const loadPost = async id => {
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await rest.json();
  return data;
};

const BookDetails = async ({ params }) => {
  const post = await loadPost(params.bookId);
  return (
    <div>
      <article className='book-details'>
        <h1>
          {post.id} . {post.title}
        </h1>
        <p>{post.body}</p>
      </article>

      <h2>Otras publicaciones </h2>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <BookList />
      </Suspense>
    </div>
  );
};

export default BookDetails;
