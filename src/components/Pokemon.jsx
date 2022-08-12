import { PokemonTypes } from "./PokemonTypes"

export function Pokemon(props) {
  const { pokemon } = props
  const heart = '❤'  

  function onHeartClick(e){
    e.target.classList.add('focus')
    setTimeout(()=>{
      e.target.classList.remove('focus')
    }, 200)
    alert("pode favoritar")
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          src={pokemon.sprites.other.home.front_default} alt={pokemon.name}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type-container">
            <PokemonTypes pokemon={pokemon}/>
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  )
}