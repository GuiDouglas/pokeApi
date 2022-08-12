import axios from 'axios'

export async function searchPokemon(pokemon){
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await axios.get(url)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function getPokemons(limit = 50, offset = 0){
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPokemonData(url){
  try{
    const response = await axios.get(url)
    return response.data  
  } catch(error){
    console.log(error)
  }
}