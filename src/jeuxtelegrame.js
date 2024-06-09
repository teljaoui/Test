import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const Scor = () => {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [winner, setWinner] = useState(null);

    const handleZeroClick = () => {
        setScore1(0);
        setScore2(0);
        setWinner(null);
    };

    const handlePauseClick = () => {
        if (score1 > score2) {
            setWinner('Joueur 1');
        } else if (score2 > score1) {
            setWinner('Joueur 2');
        } else {
            setWinner('Match nul');
        }

    };

    const incrementScore1 = () => {
        if (score1 < 10) {
            setScore1(prev => prev + 1);
        }
    };

    const incrementScore2 = () => {
        if (score2 < 10) {
            setScore2(prev => prev + 1);
        }
    };

    return (
        <Context.Provider value={{ score1, score2, setScore1, setScore2 }}>
            <div className='container m-5'>
                <Scorhead />
                <div>
                    <Button1 increment={incrementScore1} />
                    <Button2 increment={incrementScore2} />
                </div>
                <Button3 onZeroClick={handleZeroClick} />
                <Button4 onPauseClick={handlePauseClick} />
                {winner && <p>{winner} a gagné !</p>}
            </div>
        </Context.Provider>
    );
};

function Scorhead() {
    const arr = useContext(Context);
    return (
        <div>
            <h1>le score est : {arr.score1} - {arr.score2}</h1>
        </div>
    );
}

function Button1({ increment }) {
    return (
        <button className='btn btn-secondary m-1' onClick={increment}>
            Point joueur 1
        </button>
    );
}

function Button2({ increment }) {
    return (
        <button className='btn btn-secondary m-1' onClick={increment}>
            Point joueur 2
        </button>
    );
}

function Button3({ onZeroClick }) {
    return (
        <button className='btn btn-secondary m-1 zero' onClick={onZeroClick}>
            remettre à 0
        </button>
    );
}

function Button4({ onPauseClick }) {
    return (
        <button className='btn btn-secondary m-1' onClick={onPauseClick}>
            pause / reprendre
        </button>
    );
}

export default Scor;
