import React from 'react'
import '../Style/haku.css'

function Haku({ hakutermi, setHakutermi }) {
    return (
        <div className='haku'>
            <input
                type='text'
                placeholder='Etsi tuotteita...'
                value={hakutermi}
                onChange={(e) => setHakutermi(e.target.value)}
            />
        </div>
    )
}

export default Haku
