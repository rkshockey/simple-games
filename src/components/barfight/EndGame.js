import React from 'react';
import styled from 'styled-components';

function EndGame (props){
    const { setPHP, setEHP, countZero, text } = props;

    function click (){
        setPHP(200);
        setEHP(200);
        countZero();
    }

    return (
        <div className='container'>
            <p>{text}</p>
            <button onClick={click}>Play Again?</button>
        </div>
    )
}

export default EndGame