import React from 'react';

function EndGame (props){
    const { setPHP, setEHP, countZero, text } = props;

    function click (){
        setPHP(200);
        setEHP(200);
        countZero();
    }

    return (
        <div className='continue'>
            <p>{text}</p>
            <button className='continue' onClick={click}>Play Again?</button>
        </div>
    )
}

export default EndGame