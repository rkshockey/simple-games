import React, { useState } from 'react';
import MoveBtns from './MoveBtns';
import FightText from './FightText';
import EndRound from './EndRound'

function FightBox (props) {
    const [pMove, setPMove] = useState({});
    const [eMove, setEMove] = useState({});
    const [counter, setCounter] = useState(0);

    const { pHP, setPHP, eHP, setEHP, moveList } = props

    function countUp (){
        setCounter(counter + 1);
    }
    function countZero (){
        setCounter(0);
    }

    function setMoves (playerMove) {
        setPMove(playerMove);
        setEMove(moveList[Math.floor(Math.random() * moveList.length)])
    }

    if (counter === 0){
        return <MoveBtns moveList={moveList} countUp={countUp} setMoves={setMoves} />
    }else if (counter === 1){
        return <FightText pro='You' altPro='Enemy' move={pMove} altMove={eMove} hp={eHP} setHP={setEHP} altHP={pHP} setAltHP={setPHP} countUp={countUp} />
    }else if (counter === 2 && eHP === 0){
        return <EndRound pHP={pHP} eHP={eHP} setPHP={setPHP} setEHP={setEHP} countZero={countZero} />
    }else if (counter === 2){
        return <FightText pro='Enemy' altPro='You' move={eMove} altMove={pMove} hp={pHP} setHP={setPHP} altHP={eHP} setAltHP={setEHP} countUp={countUp} />
    }else if (counter === 3){
        return <EndRound pHP={pHP} eHP={eHP} setPHP={setPHP} setEHP={setEHP} countZero={countZero} />
    }

    return <p>The programmer seems to have made a mistake. Sorry!</p>
}

export default FightBox