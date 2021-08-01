import React from 'react';
import styled from 'styled-components';

function MoveBtns (props) {
    const { moveList, countUp, setMoves } = props;

    function click (e){
        const pMove = moveList.find(move => move.name === e.target.name)
        setMoves(pMove)
        countUp()
    }

    return (
        <div className='btn-container'>
            {moveList.map(move => <FightButton name={move.name} onClick={click} key={move.name}>{move.name}</FightButton>)}
        </div>
    )
}

const FightButton = styled.button`
    padding: 2%;
    width: 10%;
    border-radius: 10%;
    text-align: center;
`

export default MoveBtns