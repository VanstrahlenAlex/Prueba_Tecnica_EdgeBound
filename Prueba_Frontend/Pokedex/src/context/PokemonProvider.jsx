import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hook/useForm";


const PokemonProvider = ({ children }) => {

	const [offset, setOffset] = useState(0);
	const [allPokemons, setAllPokemons] = useState([]);
	const [globalPokemons, setGlobalPokemons] = useState([]);

	// Utilizar customHook - useform
	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: ''
	})

	//Estado para la aplicación simples
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);


	//Llamando un numero maximo de 50 Pokemons
	const getAllPokemons = async (limit = 50) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
		const data = await res.json();
		//console.log(data);

		const promises = data.results.map(async (pokemon) => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		})

		const results = await Promise.all(promises)
		setAllPokemons([
			...allPokemons,
			...results
		])
		setLoading(false)
		//console.log(results);
	}

	// Llamar a todos los pokemons
	const getGlobalPokemons = async () => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
		const data = await res.json();
		//console.log(data);

		const promises = data.results.map(async (pokemon) => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		})

		const results = await Promise.all(promises)
		setGlobalPokemons(results)
		setLoading(false)
		//console.log(results);
	}

	//Llamar a un pokemon por Id
	const getPokemonById = async (id) => {
		const baseURL = 'https://pokeapi.co/api/v2/';
		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	}

	useEffect(() => {
		getAllPokemons();
	}, [offset])

	useEffect(() => {
		getGlobalPokemons();
	}, [])

	// Cargar mas Pokemons
	const onClickLoadMore = () => {
		setOffset(offset + 50)
	}

	//Filtrar pokemons
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	})
	const [filteredPokemons, setFilteredPokemons] = useState([]);

	const handleCheckbox = (e) => {

		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked
		})

		if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon => pokemon.types.map(type => type.type.name).includes(e.target.name));
			setFilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(pokemon => !pokemon.types.map(type => type.type.name).includes(e.target.name));
			setFilteredPokemons([...filteredResults]);
		}
	}

	return (
		<>
			<PokemonContext.Provider value={
				{
					valueSearch,
					onInputChange,
					onResetForm,
					allPokemons,
					globalPokemons,
					getPokemonById,
					onClickLoadMore,
					//Loader 
					loading,
					setLoading,

					//Boton Filter
					active,
					setActive,
					// Filter Card Checkboxes
					handleCheckbox,
					filteredPokemons
					// offset,
				}
			}>
				{children}
			</PokemonContext.Provider>
		</>
	)
}

export default PokemonProvider
