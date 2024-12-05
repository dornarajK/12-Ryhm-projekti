
// export default HomePage
import React, { useState, useContext } from 'react'
import '../Style/etusivu.css'
import { AppContext } from '../context/App_Context'
import { Link } from 'react-router-dom'
import Haku from './haku'

const HomePage = () => {
    const { tuotteet } = useContext(AppContext)

    const [hakutermi, setHakutermi] = useState('')

    const suodatetutTuotteet = tuotteet?.filter(tuote =>
        tuote.tuoteNimi.toLowerCase().startsWith(hakutermi.toLowerCase())
    )


    return (
        <>
            <Haku hakutermi={hakutermi} setHakutermi={setHakutermi} />

            <div className='home-page'>
                <div className='tuotteet'>
                    {suodatetutTuotteet && suodatetutTuotteet.length > 0 ? (
                        suodatetutTuotteet.map(tuote => (
                            <div className='tuote-kortti' key={tuote._id}>
                                <Link to={`/${tuote._id}`} className='tuote-linkki'>
                                    <img src={tuote.kuva} alt={tuote.tuoteNimi} />
                                    <p className='tuote-nimi'>{tuote.tuoteNimi}</p>
                                    <p className='tuote-hinta'>{tuote.hinta}€</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className='ei-tuotteita'>Odota.. Tute ei löytynyt...</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage
