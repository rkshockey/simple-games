import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GameBtn = styled.button`
    border-radius: 20%;
    padding: 10%;
    font-size: 1.5rem;
    width: 200px
`

function StartPage () {
    return (
        <div className='container'>
            <h2>What game would you like to play?</h2>
            <div className='opener home'>
                <p>Photo by <a href="https://unsplash.com/@carltraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carl Raw</a> on <a href="https://unsplash.com/s/photos/arcade?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
            <div className='btn-container'>
                <Link to='/barfight'><GameBtn>Barfight</GameBtn></Link>
                <Link to='/rps'><GameBtn>Rock, Paper, Scissors</GameBtn></Link>
            </div>
        </div>
    )
}

export default StartPage