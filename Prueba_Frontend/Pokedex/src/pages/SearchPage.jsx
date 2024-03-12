import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import CardPokemon from "../components/CardPokemon";
const SearchPage = () => {

	const location = useLocation()

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

	return (
		<Container>
			<p className="text-primary">Se encontraron <span className="text-success">{filteredPokemons.length}</span> Pokemon(s)</p>
			<div className="bg-light card-list p-4 ">
				<Row xs={1} md={2} lg={3} xl={4}>
					{filteredPokemons.map(pokemon => (
						<CardPokemon pokemon={pokemon} key={pokemon.id} />
					))}
				</Row>
			</div>
		</Container>
	)
}

export default SearchPage
