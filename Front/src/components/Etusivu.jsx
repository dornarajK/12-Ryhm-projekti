import React, { useState, useEffect } from 'react'
import '../img/kuva1.jpg'
import { AppContext } from '../context/App_Context'

const Etusivu = () => {
	const images = [
		'kuva1.jpg', // Vaihda tiedostonimiä omiin kuviisi
		'kuva2.jpg',
		'kuva3.jpg',
	]

	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
		}, 5000) // 5000ms = 5 sekuntia

		return () => clearInterval(interval) // Siivotaan interval komponentin poistuessa
	}, [images.length])

	return (
		<div>
			<img
				src={images[currentImageIndex]}
				alt={`Slide ${currentImageIndex + 1}`}
				style={{ width: '100%', height: 'auto' }} // Mukauta tarpeen mukaan
			/>
		</div>
	)
}

export default Etusivu
