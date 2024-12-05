import React from 'react'
import img from '../img/image.png'
import '../Style/About.css'
const About = () => {
	return (
		<>
			<div className='imgediv'>
				<img src={img} className='imge' alt='.'></img>

				<div className='divp'>
					<p className='ptext'>
						Meillä uskotaan, että jokaisella esineellä on tarina – ja että
						tarina ansaitsee jatkua. Yrityksemme syntyi rakkaudesta
						kiertotalouteen ja halusta tehdä vastuullisista valinnoista
						helpompia kaikille. Myymme huolella valikoituja kierrätettyjä
						tavaroita, jotka saavat uuden elämän ja tuovat iloa uusille
						omistajilleen. <br />
						<br />
						Meidän missionamme on vähentää jätettä, tukea kestävää kulutusta ja
						tarjota vaihtoehto kertakäyttökulttuurille. Jokainen ostos on askel
						kohti ekologisempaa tulevaisuutta – ja samalla mahdollisuus löytää
						uniikkeja aarteita.
						<br />
						<br />
						Liity kanssamme rakentamaan maailmaa, jossa vanha muuttuu
						arvokkaaksi ja käytetyllä on aina uusi mahdollisuus. ❤️♻️
					</p>
				</div>
			</div>
		</>
	)
}

export default About
