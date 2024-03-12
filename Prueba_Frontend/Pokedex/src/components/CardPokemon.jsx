import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardPokemon = ({ pokemon }) => {
	return (
		<Link variant="primary" to={`/pokemon/${pokemon.id}`} className='text-decoration-none'>
			<Card
				style={{ width: '18rem', backgroundColor: 'White' }}
				className={`mb-4 card-hover`} // Apply the new class here
			>
				<span className='p-2'>N° {pokemon.id}</span>
				<Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`} style={{ height: '200px', backgroundColor: '#E8EBF0' }} />
				<Card.Body>
					<Card.Title className='mb-3 text-uppercase'>{pokemon.name}</Card.Title>
					<Card.Text truncate className='mb-2'>
						<div>
							{pokemon.types.map(type => (
								<span key={type.type.name} className={type.type.name} style={{ padding: '.5rem', margin: '.5rem', color: 'white', borderRadius: '7px' }}>{type.type.name}</span>
							))}
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};


export default CardPokemon