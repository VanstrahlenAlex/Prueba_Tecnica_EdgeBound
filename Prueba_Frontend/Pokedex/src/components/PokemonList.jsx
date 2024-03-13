import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import CardPokemon from "./CardPokemon";
import Row from 'react-bootstrap/Row';
import Loader from "./Loader";


const PokemonList = () => {

	const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext)

	return (
		<>
			{
				loading ? (<Loader />) : (
					<div className="bg-light card-list p-4 ">
						<Row xs={1} md={2} lg={3} xl={4}>
							{filteredPokemons.length ? (
								<>
									{filteredPokemons.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id} />))}
								</>
							) : (
								<>
								{allPokemons.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id} />))}
								</>
							)}

					</Row>
					</div >
				)
			}

		</>
	)
}

export default PokemonList
