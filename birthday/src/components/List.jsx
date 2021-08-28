import React from 'react'
import Person from './Person'
import { data } from './data'
import './list.scss'
import { useState } from 'react'

export default function List() {

    const [person, setPerson] = useState(data)
    
    return (
        <div className='container'>
            <h3>{person.length} birthdays remaining</h3>
            <div className="person">
                <Person people={person}/>
            <button onClick={() => {{setPerson([])}}}>Remove All</button>
            </div>
        </div>
    )
}
