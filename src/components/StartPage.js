import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Subtitle = styled.h2`
    text-align: center;
`

function StartPage (props) {
    return (
        <div className='container'>
            <Subtitle>What game would you like to play?</Subtitle>
        </div>
    )
}

export default StartPage