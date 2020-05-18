import React, { useState, useEffect } from 'react'
import data from '../data'
import './style.css'
import runner from './img/runner.png'
import text from './img/text.png'
import vs from './img/vs.png'

const Polling = () => {

    const [current, setCurrent] = useState({});
    const [newDate, setnewDate] = useState('');
    const [state, setState] = useState(false);
    const [choice, setChoice] = useState('');

    useEffect(() => {
        let random = data[Math.floor(Math.random() * data.length)];
        setCurrent(random);
        setChoice(window.localStorage.getItem(random.objectId));
        createDate(random.createdAt);
        current.state === "STARTED" ? setState('live') : setState('');
    }, []);

    useEffect(() => {
        window.localStorage.setItem(current.objectId, choice)
    }, [choice]);

    const chooseThis = (e) => {
        choice === e.target.id ? setChoice('') :
            setChoice(e.target.id)
    }

    const createDate = (currentDate) => {
        let date = new Date(currentDate);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let newDate = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
        setnewDate(newDate);
    }

    return (
        <div>
            <div className="hero">
                <img src={runner} alt="runner" />
                <img src={text} alt="text" />
            </div>
            <div className="sportName">{current.sport}</div>
            <div className="gameName">{current.group}</div>
            <div className="gameName">{newDate}</div>
            <div className="gameName">{current.country}</div>
            <div className="groupBox">
                <div className="teamBox">
                    <div className="teamName">{current.homeName}</div>
                    <button className={`button ${choice === 'home' ? "activeBotton" : ""}`}
                        onClick={(e) => chooseThis(e)} id="home">{choice === 'home' ? 'My choice' : 'Choose'}</button>
                </div>
                <div className="vs">
                    <img src={vs} alt="vs" />
                    <button className={`draw ${choice === 'draw' ? "activeDraw" : ""}`}
                        onClick={(e) => chooseThis(e)} id="draw">draw</button>
                </div>
                <div className="teamBox">
                    <div >{current.awayName}</div>
                    <button className={`button ${choice === 'guest' ? "activeBotton" : ""}`}
                        onClick={(e) => chooseThis(e)} id="guest">{choice === 'guest' ? 'My choice' : 'Choose'}</button>
                </div>
            </div>
            <div className="state">
                <div className={` ${current.state === "STARTED" ? "green" : "red"}`}></div>
                <div>{current.state === "STARTED" ? 'Game is live' : 'Game is finished'}</div>
            </div>
        </div >
    )

}

export default Polling;
