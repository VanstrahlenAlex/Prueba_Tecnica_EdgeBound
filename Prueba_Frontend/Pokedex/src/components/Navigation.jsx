import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Navigation = () => {

	const context = useContext(PokemonContext);
	console.log(context);
	return (
		<>
			<Navbar className='container'>
				<Container>
					<Link to='/' className='logo'>
						<img
							src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
							alt='Logo Pokedex'
							style={{ maxWidth: "200px" }}
						/>
					</Link>

					<Form
					// onSubmit={onSearchSubmit}
					>
						<div className='form-group d-flex gap-2'>
							<FormControl
								type='search'
								name='valueSearch'
								id=''
								// value={valueSearch}
								// onChange={onInputChange}
								placeholder='Buscar nombre de pokemon'
							/>
							<Button className='btn-search d-flex' type='submit'>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 -3 20 20">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
								</svg>
								Buscar</Button>
						</div>
					</Form>

				</Container>
			</Navbar>

			<Outlet />
		</>
	)
}

export default Navigation