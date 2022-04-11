export const getPokemons = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}

export const getPokemonsData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}


export const searchPokemon = async (pokemon) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()
    return data
}