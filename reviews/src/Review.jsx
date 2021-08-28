import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';
import data from './data'

export default function Review() {
    const [index, setIndex] = useState(0)
    const {name, job, text, image} = data[index]

    const checkIndex = (number) =>{
        if (number > data.length - 1){
            return 0
        }
        if (number < 0){
            return data.length - 1
        }
        return number
    }

    const cycleRight = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
    }

    const cycleLeft = () =>{
        setIndex((index) =>{
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
    }

    const randomIndex = (index) =>{
        let randomNumber = Math.floor(Math.random() * data.length)
        if (randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkIndex(randomNumber))
    }


    return (
        <article className='container'>
            <div className="review">
                <div className="img-container">
                    <img src={image} alt={name} className='person-img'/>
                    <span className='quote-icon'>
                    <FaQuoteRight/>
                    </span>
                </div>
                <section>
                    <div className="author"><h3>{name}</h3></div>
                    <div className="job">{job}</div>
                    <div className="info">{text}</div>
                    <button className='prev-btn' onClick={cycleLeft}>
                        <FaChevronLeft />
                    </button>
                    <button className='next-btn' onClick={cycleRight}>
                    <FaChevronRight />
                    </button>
                </section>
                <button className='random-btn' onClick={randomIndex}>random</button>
            </div>
        </article>
    )
}
