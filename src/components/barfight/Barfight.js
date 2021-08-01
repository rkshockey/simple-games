import React, { useState } from 'react';
import styled from 'styled-components';
import HomeLink from '../HomeLink';
import { moveSet } from '../../assets/constants'

  const initialAttack = {
      moveName: '',
      damage: 0,
      defend: 0,
      heal: 0,
  }

function Barfight () {
    const [moveList, setMoveList] = useState(moveSet);
    const [pHP, setPHP] = useState(200);
    const [eHP, setEHP] = useState(200);
    const [eMove, setEMove] = useState({});
    const [pAttack, setPAttack] = useState(initialAttack);
    const [eAttack, setEAttack] = useState(initialAttack);
    const [readout, setReadout] = useState('');
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h2>You're playing 'Barfight'</h2>
            <HomeLink />
            <div className='opener bar'>
                <p>Photo by <a href="https://unsplash.com/@steveallison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Steve Allison</a> on <a href="https://unsplash.com/s/photos/bar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
            <div className='container'>
                
            </div>
        </>
    )
}

export default Barfight