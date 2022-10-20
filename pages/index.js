import { useEffect, useState } from "react";

function Movies(props) {
  const { movies } = props;

  return (
    <main className="movies-list">
      <h1>{movies.length ? movies[0].title : ""}</h1>
      <ul className="movies-list__list">
        {movies.map((movie) => (
          <li className="card" key={movie.id}>
            <img
              height="227"
              width="185"
              loading="lazy"
              src={movie.img}
              alt="{movie.title}"
            />
            <div className="card__info">
              <a href={`/${movie.id}`}>{movie.title}</a>
              <span>{movie.year}</span>
              <p>Rating: {movie.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Movies;

export async function getServerSideProps() {
  const moviesResponse = await fetch(
    `https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies/`
  );

  const { movies } = await moviesResponse.json();

  return {
    props: { movies },
  };
}
