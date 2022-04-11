import React, {useState} from 'react'
import { SearchBar } from '..'
import { images } from '../../constants'
import { searchPokemon } from '../../services/pokeapi'

import './Dashboard.scss'
const Dashboard = () => {
  const [pokemon, setPokemon] = useState()
  const [loadingPokemon, setLoadingPokemon] = useState(false)
  const [handleError, setHandleError] = useState(false)
  const searchResults = async (name) => {
    setHandleError(false)
    setLoadingPokemon(false)
    const data = await searchPokemon(name).catch(() => setHandleError(true))
    const resp = await Promise.resolve(data)
    setPokemon(resp)
    setLoadingPokemon(true)
    console.log(resp)
  }

  
  return (
    <div className="pokedex-dashboard">
      <div className="logo">
        <img src={images.pokemonLogo} alt="logo" />
      </div>
    <SearchBar searchResults={searchResults}/>
    {!handleError ? (   <div className="pokemon__container">
      {!pokemon ?
        (<div className='empty'>
          <p>Buscar un pokemon</p>
        </div>)
        : (
          loadingPokemon ? (          <div className="pokemon__container-show">
          <div className="pokemon-img">
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </div>
          <div className="pokemon-info">
            <div className="pokemon-info-name">
              <p><span>#{pokemon.id}</span> {pokemon.name}</p>
            </div>
            <div className="pokemon-info-stats">
              <h3>Stats:</h3>
              {pokemon.stats.map((stat, i) => (
                <p>{stat.stat.name}: <span>{stat.base_stat}</span></p>
                
              ))}
            </div>
            <div className="pokemon-info-type">
              <h3>Type:</h3>
              {pokemon.types.map((type) => (
                <p>{type.type.name}</p>
              ))}
            </div>
          </div>
        </div>)
        : <div className='empty'><p>Cargando Pokemon..</p></div>
        )}
    </div>)
    :(    <div className="error">
    <h3>No se encontro el pokemon o id ingresado</h3>
  </div>)}
  

  </div>
  )
}

export default Dashboard