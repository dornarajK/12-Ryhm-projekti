import React from 'react'
import '../Style/tee_tuote.css'
function MyyTuote() {
	return (
		<>
			<h1>Myytävä tuote</h1>
			<form>
				<div>
					<input type='text' placeholder='Tuote nimi' name='tuotenimi' />
				</div>
				<div>
					<input type='number' placeholder='Hinta' name='hinta' />
				</div>
				<div>
					<input type='text' placeholder='Kuvaus' name='kuvaus' />
				</div>
				<div>
					<input type='text' placeholder='Kuva' name='kuva' />
				</div>
				<div>
					<button type='submit'>Julkaise tuote!</button>
				</div>
			</form>
		</>
	)
}

export default MyyTuote
