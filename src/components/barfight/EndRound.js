import React from 'react'
import styled from 'styled-components'
import EndGame from './EndGame'

function EndRound (props){
    const { pHP, setPHP, eHP, setEHP, countZero } = props

    if (pHP === 0 && eHP === 0){
        return <EndGame setPHP={setPHP} setEHP={setEHP} countZero={countZero} text='The universe wins - two fewer violent individuals in the world!' />
    }else if(pHP === 0){
        return <EndGame setPHP={setPHP} setEHP={setEHP} countZero={countZero} text='You lose...' />
    }else if (eHP === 0){
        return <EndGame setPHP={setPHP} setEHP={setEHP} countZero={countZero} text='You win!' />
    }else{
        return (
            <div className='continue'>
                <button className='continue' onClick={countZero}>Another Round!</button>
            </div>
        )
    }
}

export default EndRound