import React, { useState, useEffect } from 'react'
import '../Style/etusivu.css'

// Tuo kaikki kuvat kansiosta
const images = import.meta.glob('../img/*', { eager: true })

const HomePage = () => {
	// Luo dynaamiset kuvat
	const slides = Object.keys(images).map(path => ({
		src: images[path].default, // Webpack/Vite käyttää tätä
		alt: path.split('/').pop(), // Hae tiedostonimi
		caption: 'Caption for ' + path.split('/').pop(),
	}))

	const products = [
		{
			id: 1,
			name: 'Tuote 1',
			description: 'Tämä on Tuote 1:n kuvaus.',
			image: images['../img/kuva1.jpg']?.default,
			hinta: '100€',
		},
		{
			id: 2,
			name: 'Tuote 2',
			description: 'Tämä on Tuote 2:n kuvaus.',
			image: images['../img/kuva3.jpg']?.default,
			hinta: '100€',
		},
		{
			id: 3,
			name: 'Tuote 3',
			description: 'Tämä on Tuote 3:n kuvaus.',
			image: images['../img/kuva2.jpg']?.default,
			hinta: '100€',
		},
	]

	const [currentSlide, setCurrentSlide] = useState(0)

	// Automaatio kuvan vaihtoon
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length)
		}, 5000) // Vaihto 5 sekunnin välein

		return () => clearInterval(interval) // Puhdistus, kun komponentti poistetaan
	}, [slides.length])

	const nextSlide = () => {
		setCurrentSlide(prev => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
	}

	return (
		<div className='home-page'>
			{/* Slideshow */}
			<div className='slideshow-container'>
				{slides.map((slide, index) => (
					<div
						className={`slide ${index === currentSlide ? 'active' : ''}`}
						key={index}
						style={{ display: index === currentSlide ? 'block' : 'none' }}
					>
						<img src={slide.src} alt={slide.alt} style={{ width: '100%' }} />
					</div>
				))}

				<button className='prev' onClick={prevSlide}>
					❮
				</button>
				<button className='next' onClick={nextSlide}>
					❯
				</button>
			</div>

			{/* Product List */}
			<div className='product-lists'>
				{products.map(product => (
					<div className='product-card' key={product.id}>
						<img
							src={product.image}
							alt={product.name}
							className='product-image'
						/>
						<span className='product-name'>{product.name}</span>
						<span className='product-description'>{product.hinta}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default HomePage
