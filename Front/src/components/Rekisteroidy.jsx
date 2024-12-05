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

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/api/Rekisteroidy", { nimi, sahkoposti, salasana })
        .then(result => {console.log(result)
    navigate("/kirjaudu")
        })
        .catch(err => console.log(err))
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
=======
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
>>>>>>> main
}

export default Rekisteroidy
