import React from 'react'

function Cirle(props) {
    const state = props.value;
    return (
        <div className='outerBorder-circle'>
            <div className={
                state == 1 ? 'circle circle-active' : 'circle'
            }></div>
            <div className={
                state == 2 ? 'circle circle-active' : 'circle'
            }></div>
            <div className={
                state == 3 ? 'circle circle-active' : 'circle'
            }></div>
        </div>
    )
}

export default Cirle
