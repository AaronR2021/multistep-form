import React from 'react'

function Home(props) {
    const {
        state,
        fName,
        lName,
        email,
        occupation,
        city,
        bio
    } = props.value
    return (
        <div className='home'>
            <p className='homeInfo'>
                Hi{' '}
                {fName}
                {' '}
                {lName},
                <br/>
                Thankyou for adding your credentials
            </p>
        </div>
    )
}

export default Home
