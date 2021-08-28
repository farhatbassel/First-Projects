import React, { useState } from 'react'
import data from './data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Accordon({id, info, title}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className='question'>
            <header>    
                <h4>{title}</h4>
                <button className='btn' onClick={() => {setIsOpen(!isOpen)}}>
                    {isOpen ?<AiOutlineMinus/>: <AiOutlinePlus/>}
                </button>
            </header>
            {isOpen && <p>{info}</p>}
        </article>
    )
}
