import classNames from "classnames"
import { useState } from "react"

export function PokemonTypes(props){
  const { pokemon } = props

    class types {
      constructor(){
        this.grass = false,
        this.fire = false,
        this.poison = false
      }
    }

    return(
    <>
      {pokemon.types.map((type, index) => { 
        
        types.grass = false
        types.fire = false
        types.poison = false

        if(type.type.name == "grass"){
          types.grass = true
        }else if(type.type.name == "fire"){
          types.fire = true
        }else if(type.type.name == "poison"){
          types.poison = true
        }

        return (
          <div key={index} className={classNames("pokemon-type", {
            'grassType': types.grass,
            'fireType': types.fire,
            'poisonType': types.poison
          })}>
            {type.type.name}
          </div>
        )
      })}
    </>
  )
}