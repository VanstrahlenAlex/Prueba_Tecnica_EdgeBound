
import FilterBar from '../components/FilterBar';
import PokemonList from '../components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boostrap-icons/font/boostrap-icons.css';
const HomePage = () => {
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='bg-dark col-auto col-md-3 min-h-100'>
						<a className='text-decoration-none text-white d-flex align-itemcenter' href="">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-filter" viewBox="0 0 13 13">
								<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
							</svg>
							<span className='ms-1 fs-4'>Filtrar</span>
						</a>

						<ul
							className="nav nav-pills flex-column  "
						>

							{/* <li className="nav-item text-white fs-4">
								<a href="#" className="nav-link text-white fs-5" aria-current="page">
									<i className='bi bi-speedometer-2'></i>
									<span className="ms-2">Dashboard</span>
								</a>
							</li>
							<li className="nav-item text-white fs-4">
								<a href="#" className="nav-link text-white fs-5" aria-current="page">
									<i className='bi bi-speedometer-2'></i>
									<span className="ms-2">Home</span>
								</a>
							</li>
							<li className="nav-item text-white fs-4">
								<a href="#" className="nav-link text-white fs-5" aria-current="page">
									<i className='bi bi-table'></i>
									<span className="ms-2">Orders</span>
								</a>
							</li> */}
						</ul>
					</div>
				</div>
			</div>
			<PokemonList />
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