import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function FightText (props) {
    const [result, setResult] = useState(null)
    const { pro, altPro, move, altMove, hp, setHP, altHP, setAltHP, countUp } = props

    useEffect(() => setResult(round()),[pro])

    function round(){
        if (move.name === 'dodge' || move.name === 'defend'){
            return null
        }else if (Math.random() + altMove.dodge > move.toHit){
            return `${altPro} dodged!`
        }else if (move.heal !== 0){
            const heal = Math.floor(move.heal * (1 + Math.random()));
            if (altHP + heal > 200){
                setAltHP(200)
            }else{
                setAltHP(altHP + heal);
            }
            return `${pro} healed ${heal} points of damage!`
        }else{
            const damage = Math.floor(((2 + Math.random()) * move.damage) - ((1 + Math.random()) * altMove.defense));
            if (hp - damage < 0){
                setHP(0)
            }else{
                setHP(hp - damage);
            }
            return `${pro} did ${damage} points of damage!`
        }
    }

    return (
        <>
        <StyledDiv>
            <p>{pro} used {move.name}! {result}</p>
        </StyledDiv>
        <Next onClick={countUp}>Next</Next>
        </>
    )
}

const StyledDiv = styled.div`

`

const Next = styled.button`

`

export default FightText