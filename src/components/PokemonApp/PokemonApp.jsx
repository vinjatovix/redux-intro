import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/slices/pokemon";
import "./PokemonApp.css";

export const PokemonApp = () => {
  const { page, data, isLoading } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="main-content">
      <h1>Pokemon App</h1>
      <hr />

      <ul className="list">
        {data.map((pokemon) => (
          <li key={pokemon.name}>
            <span>
              {pokemon.name} {pokemon.url}
            </span>
          </li>
        ))}
      </ul>

      <div className="pagination-buttons">
        <button
          disabled={isLoading || page === 0}
          onClick={() => dispatch(getData(0))}
        >
          0
        </button>
        <button
          disabled={isLoading || page === 0}
          onClick={() => dispatch(getData(page - 1))}
        >
          -1
        </button>
        <p>{page}</p>
        <button
          disabled={isLoading}
          onClick={() => dispatch(getData(page + 1))}
        >
          +1
        </button>
      </div>
      {isLoading && <span>Loading...</span>}
    </div>
  );
};
