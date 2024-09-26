import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export default function SavedList(props) {
  const { movies } = props;
  const history = useHistory();

  const RoutetoHome = () => {
    history.push('/');
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(id => (
        <NavLink to={`/movies/${id}`}>
          <span key={id} className="saved-movie">{movies[id].title}</span>
        </NavLink>
      ))}
      <div className="home-button" onClick={RoutetoHome}>Home</div>
    </div>
  );
}
