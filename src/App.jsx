import { useEffect, useState } from 'react'
import { getPokemonData, getPokemons } from './api'
import './App.css'
import { Nav } from './components/Nav'
import { Pokedex } from './components/Pokedex'
import { Searchbar } from './components/Searchbar'

function App() {

  const [ loading, setLoading ] = useState(false)
  const [ page, setPage ] = useState(false)
  const [ pokemons, setPokemons ] = useState([])

  async function fetchPokemons(){
    try{
      setLoading(true)
      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    console.log("carregante")
    fetchPokemons()
  }, [])

  return (
    <>
      <Nav />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </>
  )
}

export default App
