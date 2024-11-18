import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Kirjaudu() {    

    const [sahkoposti, setSahkoposti] = useState()
    const [salasana, setSalasana] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/api/kirjaudu", { sahkoposti, salasana })
        .then(result => {
            console.log("result",result)
            if(result.data.code === "Success"){
                console.log("Success")
                navigate("/")
            }else{
                navigate("/Rekisteroidy")
                alert("Et ole rekisteröitynyt tähän palveluun")
            }
    
        })
        .catch(err => console.log(err))
    }


return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2><center>Kirjaudu</center></h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Sahkoposti</strong>
                    </label>
                    <input type="text" 
                    placeholder='Syötä sahkoposti' 
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
                    Login
                </button>
                </form>
                <p>Eikö sinulla ole tiliä</p>
                <Link to="/Rekisteröidy" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Rekisteröidy
                </Link>
            
        </div>
    </div>
);
}

export default Kirjaudu;

