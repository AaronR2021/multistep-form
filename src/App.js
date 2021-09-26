import './App.css';
import {useState} from 'react';

import FormUserDetails from './components/FormUserDetails.js';
import AppBarComponent from './components/appBar.js'
import Circle from './components/Cirle'
import Display from './components/Display.js';
import Home from './components/Home.js'


function App() {
    const [state, setState] = useState(1);
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    const value = {
        state,
        fName,
        lName,
        email,
        occupation,
        city,
        bio
    }

    // methods
    const nextState = (e) => {
        setState(prev => prev + 1)
    }
    const prevState = (e) => {
        setState(prev => prev - 1)
    }

    const setters = {
        nextState,
        prevState,
        setFName,
        setLName,
        setEmail,
        setOccupation,
        setCity,
        setBio
    }

    switch (state) {
        case 1:
            return (
                <>

                    <AppBarComponent title='Enter User Details'/>
                    <Circle value={state}/>
                    <FormUserDetails value={value}
                        lable={
                            {
                                lable1: 'First name',
                                lable2: 'Last name',
                                lable3: 'Email'
                            }
                        }
                        setters={
                            {setters}
                        }/>
                </>
            );
        case 2:
            return (
                <div>
                    <AppBarComponent title='Enter Personal Details'/>
                    <Circle value={state}/>
                    <FormUserDetails value={value}
                        lable={
                            {
                                lable1: 'Occupation',
                                lable2: 'City',
                                lable3: 'Bio'
                            }
                        }
                        setters={
                            {setters}
                        }/>
                </div>
            );
        case 3:
            return (
                <div className='center-info'>
                    <AppBarComponent title='Confirm'/>
                    <Circle value={state}/>
                    <Display value={value}
                        setters={
                            {setters}
                        }/>
                </div>
            );
        case 4:
            return (
                <div className='center-info'>
                    <AppBarComponent title='Home'/>
                    <Home value={value}/>
                </div>
            );
        default:
            return (
                <>Something went qrong-{state}</>
            )
    }
}
export default App;
