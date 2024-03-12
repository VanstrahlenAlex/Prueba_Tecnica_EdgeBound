
import React, { useContext } from 'react';
import FilterBar from '../components/FilterBar';
import PokemonList from '../components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonContext } from '../context/PokemonContext';
import { Button } from 'react-bootstrap';

const HomePage = () => {

	const { onClickLoadMore, active, setActive } = useContext(PokemonContext)
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<a className='text-decoration-none text-white d-flex align-itemcenter' href="">
						<div className='bg-dark col-auto col-md-3 min-h-100' onClick={() => setActive(!active)}>
							<span className='ms-1 fs-4 text-light'>Filtrar</span>
						</div>
					</a>
				</div>
			</div>
			<PokemonList />
			<div className="container-btn-load-more container">
				<Button variant="primary" onClick={onClickLoadMore}>
					Cargar más
				</Button>
			</div>
			<FilterBar />

		</>
	)
}

export default HomePage


// < Navbar bg = 'light' expand = "lg" >
// 	<Container>
// 		<Navbar.Toggle aria-controls='filter-collapse' />
// 		<div className='container-filter container'>
// 			<div className='icon-filter'
// 			// onClick={() => setActive(!active)}
// 			>
// 				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
// 					<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
// 				</svg>
// 				<span>Filtrar</span>
// 			</div>
// 		</div>
// 		<PokemonList />
// 		<FilterBar />
// 		<Container className="container-btn-load-more">
// 			<Button variant="primary"
// 			// onClick={onClickLoadMore}
// 			>
// 				Cargar más
// 			</Button>
// 		</Container>

// 	</Container>
// 	</ >