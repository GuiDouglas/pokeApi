export function Nav(){
  const logoImg = `https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true`
  return(
    <nav>
      <div>
        <img 
          src={logoImg}
          alt="Pokedex" 
          className="navbar-img"
        />
      </div>
    </nav>

  )
}