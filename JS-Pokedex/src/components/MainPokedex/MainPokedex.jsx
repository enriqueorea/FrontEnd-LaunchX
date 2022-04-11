import React from "react";

import PokemonCard from "../PokemonCard/PokemonCard";
import "./MainPokedex.scss";
import Pagination from "../Pagination/Pagination";

const MainPokedex = ({ pokemons, prev, next, onNext, onPrev }) => {

  return (
    <div className="pokedex-main-container">
      <Pagination prev={prev} next={next} onNext={onNext} onPrev={onPrev} />
      <div className="pokedex-main">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination prev={prev} next={next} onNext={onNext} onPrev={onPrev} />
    </div>
  );
};

export default MainPokedex;
