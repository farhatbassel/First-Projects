import React from 'react'

export default function Person({people}) {
    return (
        <>
            {people.map((person) =>{
                const{id, name, age, img} = person;
            return (
            <article key={id} className='person'>
                <img src={img} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>
            </article>
                ) 
            })}
        </>
    )
}
