import { helix } from 'ldrs'


const Loader = () => {
	helix.register()
	return (
		<>
			<div className='container-loader'>
				< l-helix
					size="100"
					speed="1.1"
					color="black"
				></l-helix >
			</div>
		</>
	)
}

export default Loader