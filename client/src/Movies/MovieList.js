import React from 'react';
import { useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id } = props.movie;
  const history = useHistory();

  const routeToMovie = () => {
    history.push(`/movies/${id}`);
  }

  return (
    <MovieCard movie={props.movie} routeToMovie={routeToMovie} />
  );
}
