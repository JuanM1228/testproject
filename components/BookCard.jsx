"use client";
import React from "react";

import Link from "next/link";
import Badge from "./Badge";
import {
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiUserCircle,
} from "react-icons/hi";
import "./BookCard.css";
const BookCard = ({ book }) => {
  const {
    title,
    author,
    content_short,
    publisher,
    publisher_date,
    pages,
    url_details,
    thumbnail,
    cover,
  } = book;

  return (
    <div className='book-card'>
      <h1>{title}</h1>
      <p>{content_short}</p>
      <section className='book-card-badges-container'>
        <Badge
          icon={<HiOutlineDocumentText size={20} />}
          message={pages}
          backgroundColor='#cec9dd'
          textColor='#4b5563'
        />
        <Badge
          icon={<HiOutlineCalendar size={20} />}
          message={publisher_date}
          backgroundColor='rgb(2 132 199)'
          textColor='rgb(240 249 255)'
        />
        <Badge
          icon={<HiUserCircle width={50} height={50} />}
          message={author}
          backgroundColor='rgb(4 120 87)'
          textColor='rgb(209 250 229)'
        />
      </section>
      {/* <Link href={`/posts/${post.id}`}>
        <button>Click</button>
      </Link> */}
    </div>
  );
};

export default BookCard;
