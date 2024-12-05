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
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h2><center>Rekisteroidy</center></h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Nimi</strong>
                    </label>
                    <input type="text" 
                    placeholder=' nimi' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0'
                    onChange={(e) => setNimi(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Sähköposti</strong>
                    </label>
                    <input type="text" 
                    placeholder='Syötä sähköposti' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setSahkoposti(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Salasana</strong>
                    </label>
                    <input type="password" 
                    placeholder='Syötä salasana' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setSalasana(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                Rekisteroidy
                </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/kirjaudu" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            
        </div>
    </div>
);
}

export default Rekisteroidy
