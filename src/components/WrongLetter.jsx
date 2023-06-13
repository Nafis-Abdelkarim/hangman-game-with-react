import React from 'react'

export const WrongLetter = ({WrongLetter}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {WrongLetter.lenght > 0 && <p>Wrong</p>}
                {WrongLetter
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)
                }
            </div>
        </div>
    )
}
