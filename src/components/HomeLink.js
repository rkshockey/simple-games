import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-text: center;
`

function HomeLink () {
    return (
        <StyledDiv>
            <Link to='/'><button>Back to home?</button></Link>
        </StyledDiv>
    )
}

export default HomeLink