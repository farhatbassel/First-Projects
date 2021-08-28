import React from 'react'
import Tour from './Tour'

export default function Tours({tours, removeTours}) {
    return (
        <section>
        <div className='title'>
            <h2>Our tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {tours.map((tours) =>{
                return <Tour key={tours.id} {...tours} removeTours = {removeTours}/>
            })}
        </div>
        </section>
    )
}
