import { Pokemon } from "./Pokemon"

export function Pokedex(props) {
  const { pokemons, loading } = props
  
  return (
    <>
      <div className="pokedex-header">
        <h2>Pokesex</h2>
        <h3>Paginação</h3>
      </div>
      {loading ?(
        <div className="loading"> Calma ae</div>
      ) : (
        <div className="pokedex-grid">
        { pokemons && pokemons.map((pokemon, index)=>{
            return(
              <Pokemon key={index} pokemon={pokemon}/>
            )
          })
        }
        </div>
      )}
    </>
  )
}