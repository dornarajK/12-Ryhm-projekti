import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/App_Context'
import { Link, useLocation } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri'
import '../Style/Tute_nakyma.css'
const TuoteTiedot = () => {
	const { id } = useParams()
	const { tuoteId } = useContext(AppContext)
	const [tuote, setTuote] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchTuote = async () => {
			try {
				const response = await tuoteId(id)
				setTuote(response.data)
			} catch (error) {
				console.error('Virhe tuotteen hakemisessa:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchTuote()
	}, [id, tuoteId])

	if (loading) {
		return <p>Ladataan tuotteen tietoja...</p>
	}

	if (!tuote) {
		return <p>Tuotetta ei löytynyt.</p>
	}

	return (
		<div className='tuote-nakyma'>
			<div className='tuote-tiedot'>
				<haku />
				<Link to={'/'} className='link'>
					<RiArrowGoBackFill />
					Etusivulle
				</Link>
				<img
					src={tuote.kuva}
					alt={tuote.tuoteNimi}
					style={{ width: '300px', height: 'auto' }}
				/>
				<h4>{tuote.tuoteNimi}</h4>
				<p>{tuote.hinta}€</p>
				<p>{tuote.tiedot}</p>
			</div>
		</div>
	)
}

export default TuoteTiedot
