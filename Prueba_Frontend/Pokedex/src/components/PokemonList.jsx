import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import CardPokemon from "./CardPokemon";
import Row from 'react-bootstrap/Row';


const PokemonList = () => {

	const { allPokemons } = useContext(PokemonContext)

	return (
		<>
			<div className="bg-light card-list p-4 ">

				<Row xs={1} md={2} lg={3} xl={4}> {/* Adjust column count for different screen sizes */}
					{allPokemons.map(pokemon => (
						<CardPokemon pokemon={pokemon} key={pokemon.id} />
					))}
				</Row>
			</div>
		</>
	)
}

export default PokemonList
