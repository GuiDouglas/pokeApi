import { useState } from "react"
import { searchPokemon } from '../api'

export function Searchbar(){ 
  const [ search, setSearch] = useState('dito')
  const [ pokemon, setPokemon ] = useState()

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  function onClickHandler(e){
    onSearchHandler(search)
    addButtonClass(e)
  }

  function addButtonClass(e){
    e.target.classList.add('target')
    setTimeout(() => {
      e.target.classList.remove('target')
    }, 1500);
  }

  const onSearchHandler = async (pokemon) => {
    const res = await searchPokemon(pokemon)
    setPokemon(res.data)
  }

  return(
    <>
      <div className="searchbar-container">
        <div className="searchbar">
          <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>
        </div>
        <div className="searchbar-btn">
          <button onClick={onClickHandler}> Buscar </button>
        </div>
        { pokemon ? 
          <div className="pokemon-info">
            <p>nome: {pokemon.name}</p>
            <p>peso: {pokemon.weight}kg</p>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
          </div>
          : null
        }
      </div>
    </>
  )
}