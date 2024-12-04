import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Style/rekisteroidy.css'

function Rekisteroidy() {
	const [nimi, setNimi] = useState('')
	const [sahkoposti, setSahkoposti] = useState('')
	const [salasana, setSalasana] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://localhost:3000/api/Rekisteroidy',
				{
					nimi,
					sahkoposti,
					salasana,
				}
			)
			console.log(response.data)
			navigate('/kirjaudu')
		} catch (error) {
			console.error('Rekisteröinti epäonnistui:', error)
		}
	}

	return (
		<div className='rek'>
			<div className='rek'>
				<h2 className='center'>Rekisteröidy</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<label htmlFor='nimi'>
							<strong>Nimi</strong>
						</label>
						<input
							type='text'
							id='nimi'
							placeholder='Syötä nimi'
							autoComplete='off'
							className='form-control'
							value={nimi}
							onChange={e => setNimi(e.target.value)}
							required
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='sahkoposti'>
							<strong>Sähköposti</strong>
						</label>
						<input
							type='email'
							id='sahkoposti'
							placeholder='Syötä sähköposti'
							autoComplete='off'
							className='form-control'
							value={sahkoposti}
							onChange={e => setSahkoposti(e.target.value)}
							required
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='salasana'>
							<strong>Salasana</strong>
						</label>
						<input
							type='password'
							id='salasana'
							placeholder='Syötä salasana'
							className='form-control'
							value={salasana}
							onChange={e => setSalasana(e.target.value)}
							required
						/>
					</div>
					<button type='submit' className='btn btn-success w-100'>
						Rekisteröidy
					</button>
				</form>
			</div>
		</div>
	)
}

export default Rekisteroidy
