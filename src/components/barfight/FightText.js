import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function FightText (props) {
    const [result, setResult] = useState(null)
    const { pro, altPro, move, altMove, hp, setHP, countUp } = props

    useEffect(() => setResult(round()),[])

    console.log(hp)

    function newHP (){
        if (hp > 200){
            setHP(200)
        }else if (hp < 0){
            setHP(0)
        }
    }

    function round(){
        if (move.name === 'dodge' || move.name === 'defend'){
            return null
        }else if (Math.random() + altMove.dodge > move.toHit){
            console.log(hp)
            return `${altPro} dodged!`
        }else if (move.heal !== 0){
            const heal = Math.floor(move.heal * (1 + Math.random()));
            setHP(hp + heal);
            newHP();
            return `${pro} healed ${heal} points of damage!`
        }else{
            console.log(hp)
            const damage = Math.floor(((2 + Math.random()) * move.damage) - ((1 + Math.random()) * altMove.defense));
            setHP(hp - damage);
            console.log(hp)
            newHP();
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