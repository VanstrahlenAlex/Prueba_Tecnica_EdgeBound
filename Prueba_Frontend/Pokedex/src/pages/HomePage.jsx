import React, { useContext, useState, useRef, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import PokemonList from '../components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonContext } from '../context/PokemonContext';
import { Button } from 'react-bootstrap';

const HomePage = () => {
	const { onClickLoadMore, active, setActive } = useContext(PokemonContext);
	const [showFilters, setShowFilters] = useState(false);
	const filterRef = useRef(null);

	const handleAvatarClick = () => {
		setShowFilters(!showFilters);
	};


	const handleClickOutside = (event) => {
		if (filterRef.current && !filterRef.current.contains(event.target)) {
			setShowFilters(false);
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<>
				<div className='container-filter container'>
					<div className='icon-filter' onClick={() => setActive(!active)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
							/>
						</svg>
						<span>Filtrar</span>
					</div>
				</div>
				<PokemonList />
				<FilterBar />
				<div className="container-btn-load-more container">
					<Button className='bg-primary' onClick={onClickLoadMore}>
						Cargar más
					</Button>
				</div>
			</>
		</>
	);
};

export default HomePage;


// import React, { useContext, useState } from 'react';
// import FilterBar from '../components/FilterBar';
// import PokemonList from '../components/PokemonList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { PokemonContext } from '../context/PokemonContext';
// import { Button } from 'react-bootstrap';

// const HomePage = () => {

// 	const { onClickLoadMore, active, setActive } = useContext(PokemonContext)
// 	const [showFilters, setShowFilters] = useState(false);

// 	const handleAvatarClick = () => {
// 		setShowFilters(!showFilters);
// 	};
// 	return (
// 		<>
// 			<div className='container-fluid'>
// 				<div className='row'>
// 					<div className='text-decoration-none text-white d-flex align-itemcenter'>
// 						<div className='bg-primary col-auto col-md-3 min-h-100' onClick={handleAvatarClick} >
// 							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
// 								<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
// 							</svg>
// 							<span className='ms-1 fs-4 text-light'>Filtrar</span>
// 						</div>
// 						{showFilters ? <div className='position-fixed top-0 start-0 w-100 bg-light p-3' style={{ zIndex: 100 }}>
// 							<FilterBar />
// 						</div> : null}
// 					</div>
// 				</div>
// 			</div>
// 			<PokemonList />
// 			<div className="container-btn-load-more container">
// 				<Button variant="primary" onClick={onClickLoadMore}>
// 					Cargar más
// 				</Button>
// 			</div>


// 		</>
// 	)
// }

// export default HomePage
