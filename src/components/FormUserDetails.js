import React from 'react';
import TextField from '@material-ui/core/TextField';

function FormUserDetails(props) {
    const {
        state,
        fName,
        lName,
        email,
        occupation,
        city,
        bio
    } = props.value
    const {
        nextState,
        prevState,
        setFName,
        setLName,
        setEmail,
        setOccupation,
        setCity,
        setBio
    } = props.setters.setters
    const {lable1, lable2, lable3} = props.lable

    return (
        <div>

            <form className='grid-center'>
                <div className='input'>
                    <TextField placeholder={lable1}
                        className='input'
                        required
                        onChange={
                            (e) => {
                                {
                                    state == 1 ? setFName(e.target.value) : setOccupation(e.target.value)
                                }
                            }
                        }
                        value={
                            state == 1 ? fName : occupation
                        }/>
                </div>
            <div className='input'>
                <TextField placeholder={lable2}
                    className='input'
                    required
                    onChange={
                        (e) => {
                            state == 1 ? setLName(e.target.value) : setCity(e.target.value)
                        }
                    }
                    value={
                        state == 1 ? lName : city
                    }/>
            </div>
        <div className='input'>
            <TextField placeholder={lable3}
                className='input'
                required
                onChange={
                    (e) => {
                        state == 1 ? setEmail(e.target.value) : setBio(e.target.value)

                    }
                }
                value={
                    state == 1 ? email : bio
                }/>
        </div>

    {
    state == 1 ? <>
        <button className='Confirm-btn btn'
            onClick={nextState}>Continue</button>
    </> : <div className='btn-row'>
        <button className='Confirm-btn btn'
            onClick={prevState}>back</button>
        <button className='Confirm-btn btn'
            onClick={nextState}>Continue</button>
    </div>
} </form></div>
    )
}

export default FormUserDetails
