import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import img from '../img/concept14.png'
import '../Style/kirjaudu.css'

function Kirjaudu() {
	const [sahkoposti, setSahkoposti] = useState('')
	const [salasana, setSalasana] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const validateForm = () => {
		if (!sahkoposti || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sahkoposti)) {
			setError('Syötä kelvollinen sähköposti.')
			return false
		}
		if (!salasana) {
			setError('Salasana ei voi olla tyhjä.')
			return false
		}
		setError('')
		return true
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!validateForm()) return

		try {
			const result = await axios.post('http://localhost:3000/api/kirjaudu', {
				sahkoposti,
				salasana,
			})

			if (result.data.code === 'Success') {
				// Tallenna token localStorageen
				localStorage.setItem('authToken', result.data.token) // Oletetaan, että token tulee tässä kentässä
				navigate('/')
			} else {
				navigate('/Rekisteroidy')
				alert('Et ole rekisteröitynyt tähän palveluun')
			}
		} catch (err) {
			console.error('Kirjautumisvirhe:', err)
			setError('Jotain meni pieleen. Yritä uudelleen myöhemmin.')
		}
	}

	return (
		<div className='taulu'>
			<div className='kuva'>
				<img src={img} alt='Kirjautumiskonsepti' />
			</div>
			<div className='kirjaudu'>
				<div>
					<h2>
						<center>Kirjaudu</center>
					</h2>
					<form onSubmit={handleSubmit} noValidate>
						{error && <p className='error'>{error}</p>}
						<div className='mb-3 w-100'>
							<label htmlFor='email'>
								<strong>Sähköposti</strong>
							</label>
							<input
								type='email'
								placeholder='Syötä sähköposti'
								autoComplete='off'
								name='email'
								className='form-control bo'
								onChange={e => setSahkoposti(e.target.value)}
								value={sahkoposti}
							/>
						</div>
						<div className='mb-3 w-100'>
							<label htmlFor='password'>
								<strong>Salasana</strong>
							</label>
							<input
								type='password'
								placeholder='Syötä salasana'
								name='password'
								className='form-control bo'
								onChange={e => setSalasana(e.target.value)}
								value={salasana}
							/>
						</div>
						<button type='submit' className='btn btn-primary w-100 bo cursor '>
							Kirjaudu
						</button>
					</form>
					<p className='signup-text'>Eikö sinulla ole tiliä?</p>
					<Link to='/Rekisteroidy' className='linkki'>
						Rekisteröidy
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Kirjaudu
