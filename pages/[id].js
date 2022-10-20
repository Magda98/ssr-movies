import { useState, useEffect } from "react";

export default function Movie(props) {
  const { movie } = props;
  return (
    <main className="movie">
      <section className="movie__title">
        <h1>{movie.title}</h1>
      </section>
      <section className="movie__about">
        <img
          height="227"
          width="185"
          className="movie_image"
          src={movie.img}
          alt=""
        />
        <div className="movie_description">
          <header>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
          </header>
          <p>Rate: {movie.rating}★</p>
          <p>{movie.description}</p>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const moviesResponse = await fetch(
    `https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies/${context.query.id}`
  );

  const movie1 = await moviesResponse.json();
  const movie = movie1[0];

  return { props: { movie } };
}
