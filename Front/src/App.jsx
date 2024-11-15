import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Signup from './components/Singup'
import Login from './components/Login'
import Etusivu from './components/Etusivu'
import MyyTuote from './components/TeeTuote'

function App() {
	return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path='/Rekisteroidy' element={<Signup />} />
					<Route path='/kirjaudu' element={<Login />} />
					<Route path='/' element={<Etusivu />} />
					<Route path='/teeTuote' element={<MyyTuote />} />
				</Routes>
			</div>
		</>
	)
}

export default App
