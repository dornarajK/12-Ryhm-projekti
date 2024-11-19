// import React from 'react'
// import '../Style/tee_tuote.css'
// function MyyTuote() {
// 	return (
// 		<>
// 			<h1>Myytävä tuote</h1>
// 			<form>
// 				<div>
// 					<input type='text' placeholder='Tuote nimi' name='tuotenimi' />
// 				</div>
// 				<div>
// 					<input type='number' placeholder='Hinta' name='hinta' />
// 				</div>
// 				<div>
// 					<input type='text' placeholder='Kuvaus' name='kuvaus' />
// 				</div>
// 				<div>
// 					<input type='text' placeholder='Kuva' name='kuva' />
// 				</div>
// 				<div>
// 					<button type='submit'>Julkaise tuote!</button>
// 				</div>
// 			</form>
// 		</>
// 	)
// }

// export default MyyTuote

import React, { useState, useContext } from 'react'
import '../Style/tee_tuote.css'
import { AppContext } from '../context/App_Context'

function MyyTuote() {
	const { teeTuote } = useContext(AppContext)

	const [formData, setFormData] = useState({
		tuotenimi: '',
		hinta: '',
		kuvaus: '',
		kuva: null,
	})

	const [previewImage, setPreviewImage] = useState(null) // Esikatselukuvaa varten

	// Päivitä lomaketiedot
	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	// Käsittele kuvan valinta
	const handleFileChange = e => {
		const file = e.target.files[0]
		setFormData({ ...formData, kuva: file })

		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreviewImage(reader.result)
			}
			reader.readAsDataURL(file)
		} else {
			setPreviewImage(null) // Tyhjennä esikatselukuva, jos tiedostoa ei valita
		}
	}

	// Lomakkeen lähetys
	const handleSubmit = async e => {
		e.preventDefault()

		const data = new FormData()
		data.append('tuotenimi', formData.tuotenimi)
		data.append('hinta', formData.hinta)
		data.append('kuvaus', formData.kuvaus)
		data.append('kuva', formData.kuva)

		try {
			const response = await teeTuote(data)
			console.log('Tuote lisätty onnistuneesti:', response.data)
			setFormData({ tuotenimi: '', hinta: '', kuvaus: '', kuva: null })
			setPreviewImage(null)
		} catch (error) {
			console.error('Virhe tuotetta lisätessä:', error)
		}
	}

	return (
		<div className='tee'>
			<h1>Myytävä tuote</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<h6>Tuote nimi</h6>
					<input
						type='text'
						placeholder='Tuote nimi'
						name='tuotenimi'
						value={formData.tuotenimi}
						onChange={handleChange}
					/>
				</div>
				<div>
					<h6>Hinta</h6>
					<input
						type='number'
						placeholder='Hinta'
						name='hinta'
						value={formData.hinta}
						onChange={handleChange}
						min={1}
					/>
				</div>
				<div className='kuvaus'>
					<h6>Kuvaus</h6>
					<textarea
						placeholder='Kuvaus'
						name='kuvaus'
						value={formData.kuvaus}
						onChange={handleChange}
					/>
				</div>

				<div>
					<div className='valitsee'>
						<span className='btn btn-primary btn-file'>
							Hae kuva
							<input
								type='file'
								name='kuva'
								accept='image/*'
								onChange={handleFileChange}
							/>
						</span>
					</div>

					{previewImage && (
						<div>
							<img
								src={previewImage}
								alt='Esikatselu'
								style={{
									width: '200px',
									height: 'auto',
									marginTop: '10px',
									border: '1px solid #ccc',
								}}
							/>
						</div>
					)}
				</div>
				<div>
					<button type='submit'>Julkaise tuote!</button>
				</div>
			</form>
		</div>
	)
}

export default MyyTuote
