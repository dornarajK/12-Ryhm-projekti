import React, { useState, useEffect, useContext } from 'react'
import '../Style/etusivu.css'
import { AppContext } from '../context/App_Context'
import { Link } from 'react-router-dom'
import Haku from './haku'

const HomePage = () => {
	const { tuotteet } = useContext(AppContext)

	console.log('etusivu', tuotteet)

	const slides = tuotteet.map(tuote => ({
		src: tuote.kuva,
		alt: tuote.tuoteNimi,
	}))

	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [slides.length])

	const nextSlide = () => {
		setCurrentSlide(prev => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
	}

	return (
		<>
			<Haku className='haku' />

			<div className='home-page'>
				<div className='tuotteet'>
					{tuotteet && tuotteet.length > 0 ? (
						tuotteet.map(tuote => (
							<div className='tuote-kortti' key={tuote._id}>
								<Link to={`/${tuote._id}`} className='tuote-linkki'>
									<img src={tuote.kuva} alt={tuote.tuoteNimi} />
									<p className='tuote-nimi'>{tuote.tuoteNimi}</p>
									<p className='tuote-hinta'>{tuote.hinta}€</p>
								</Link>
							</div>
						))
					) : (
						<p className='ei-tuotteita'>Tuotteita ei löytynyt.</p>
					)}
				</div>
			</div>
		</>
	)
}

export default HomePage
