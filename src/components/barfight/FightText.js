import React, { useState, useEffect } from 'react'

function FightText (props) {
    const [result, setResult] = useState(null)
    const { pro, altPro, move, altMove, hp, setHP, altHP, setAltHP, countUp } = props

    useEffect(() => setResult(round()),[pro])

    function round(){
        if (move.name === 'dodge' || move.name === 'defend'){
            return null
        }else if (move.heal !== 0){
            const heal = Math.floor(move.heal * (1 + Math.random()));
            if (altHP + heal > 200){
                setAltHP(200)
            }else{
                setAltHP(altHP + heal);
            }
            return `${pro} healed ${heal} points of damage!`
        }else if (Math.random() + altMove.dodge > move.toHit){
            return `${altPro} dodged!`
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
        <div className='continue'>
            <p>{pro} used {move.name}! {result}</p>
            <button className='continue' onClick={countUp}>Next</button>
        </div>
    )
}

export default FightText