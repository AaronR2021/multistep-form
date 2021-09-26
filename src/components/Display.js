import React from 'react'

function Display(props) {
    const {
        state,
        fName,
        lName,
        email,
        occupation,
        city,
        bio
    } = props.value
    const {nextState, prevState} = props.setters.setters
    return (
        <div className='displayInfo'>
            <div className='center-info'>
                <h2 className='HeadderInfo'>First Name:</h2>
                <p>{fName}</p>
                <h2 className='HeadderInfo'>Last Name:</h2>
                <p>{lName}</p>
                <h2 className='HeadderInfo'>Email:</h2>
                <p>{email}</p>
                <h2 className='HeadderInfo'>Occupation:</h2>
                <p>{occupation}</p>
                <h2 className='HeadderInfo'>City:</h2>
                <p>{city}</p>
                <h2 className='HeadderInfo'>Bio:</h2>
                <p>{bio}</p>
                <div>
                    <button className='Confirm-btn btn'
                        onClick={prevState}>Back</button>
                    <button className='Confirm-btn btn'
                        onClick={nextState}>Confirm</button>
                </div>
            </div>

        </div>
    )
}

export default Display
