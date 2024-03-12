import { useContext, useState, useEffect } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useParams } from "react-router-dom";
import { Row, Col, Card, Image, Badge, ListGroup } from 'react-bootstrap';
import Loader from "../components/Loader";
import { primerMayuscula } from "../helpers/helper";

const PokemonPage = () => {

	const { getPokemonById } = useContext(PokemonContext)

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({})

	const { id } = useParams();

	const fetchPokemon = async (id) => {
		const data = await getPokemonById(id);
		setPokemon(data);
		setLoading(false);
	}

	useEffect(() => {
		fetchPokemon(id);
	}, [id]);

	return (
		<>
			<main className='container main-pokemon pt-5'>
				{loading ? (<Loader />) : <>
					<Row className="justify-content-center">
						<Col xs={12} md={6}>

							<Card className="shadow">
								<Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon?.name}`} style={{ height: '300px' }} />
							</Card>
							<Card.Body>
								<span className='' style={{ top: '30px', left: '100px' }}>
									<span className="d-inline-block " style={{ fontSize: '50px', fontWeight: '50', color: 'var(--color-primary-hover)' }}>
										#{pokemon.id}
									</span>
								</span>
								<Card.Title className='text-uppercase p-4'>{primerMayuscula(pokemon.name)}</Card.Title>
								<Card.Text>
									<ListGroup variant="flush">

										<ListGroup.Item className={`${pokemon.types[0].type.name}`}>
											{pokemon.types.map(type => (
												<Badge key={type.type.name} bg={type.type.name} variant="light" className='mb-1'>
													{type.type.name}
												</Badge>
											))}
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col>Altura</Col>
												<Col>{pokemon.height}</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col>Peso</Col>
												<Col>{pokemon.weight}KG</Col>
											</Row>
										</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card.Body>

						</Col>
						<Col xs={12} md={6}>
							<h3>Estadísticas</h3>
							<ListGroup variant="flush">
								{pokemon.stats.map(stat => (
									<ListGroup.Item className="text-uppercase" key={stat.stat.name}>
										<Row>
											<Col className="text-primary">{stat.stat.name}</Col>
											<Col className='d-flex justify-content-end text-success'>
												<span>{stat.base_stat}</span>
											</Col>
										</Row>
									</ListGroup.Item>
								))}
							</ListGroup>
						</Col>
					</Row>
				</>}

			</main>
		</>
	)
}

export default PokemonPage
