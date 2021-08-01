import React, { useState } from 'react';
import styled from 'styled-components';
import HomeLink from '../HomeLink';
import { moveSet } from '../../assets/constants'
import FightBox from './FightBox'

function Barfight () {
    const [moveList, setMoveList] = useState(moveSet);
    const [pHP, setPHP] = useState(200);
    const [eHP, setEHP] = useState(200);

    return (
        <>
            <h2>You're playing 'Barfight'</h2>
            <HomeLink />
            <div className='opener bar'>
                <p>Photo by <a href="https://unsplash.com/@steveallison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Steve Allison</a> on <a href="https://unsplash.com/s/photos/bar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
            <div className='container'>
                <HPContainer>
                    <PlayerHP>Your HP: {pHP}</PlayerHP>
                    <EnemyHP>Enemy HP: {eHP}</EnemyHP>
                </HPContainer>
                <FightBox pHP={pHP} eHP={eHP} setEHP={setEHP} setPHP={setPHP} moveList={moveList} />
            </div>
        </>
    )
}

const HPContainer = styled.div`
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
`

const hpStyle = 'width: 20%; padding: 1%; font-weight: bold; text-align: center;'

const PlayerHP = styled.p`
    background: lightgreen;
    ${hpStyle}
`

const EnemyHP = styled.p`
    background: pink;
    ${hpStyle}
`

export default Barfight