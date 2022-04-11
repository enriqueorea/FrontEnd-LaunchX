import React, { useEffect, useState } from "react";
import { Dashboard, MainPokedex } from "../../components";
import { getPokemons, getPokemonsData } from "../../services/pokeapi";

import "./Pokedex.scss";
const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=15";

  const fetchPokemons = async (url) => {
    const data = await getPokemons(url);
    const promise = data.results.map(async (pokemon) => {
      return await getPokemonsData(pokemon.url);
    });
    const results = await Promise.all(promise);

    setPokemons(results);
    setLoading(false);
    setData(data);
  };
  const onPrev = () => {
    fetchPokemons(data.previous);
  };
  const onNext = () => {
    fetchPokemons(data.next);
  };
  useEffect(() => {
    fetchPokemons(initialUrl);
  }, []);

  return (
      <div className="pokedex-container">
        <Dashboard pokemons={pokemons}/>

        <MainPokedex
          pokemons={pokemons}
          prev={data.previous}
          next={data.next}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>

  );
};

export default Pokedex;
