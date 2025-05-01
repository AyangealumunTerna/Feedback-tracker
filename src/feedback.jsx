import React from 'react';
import { useState } from 'react';

function Feedback() {

    // State variables to track feedback counts and total feedback count
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const total = good + neutral + bad;

    // Functions to handle button clicks and update state for good, neutral, and bad feedback
    const handleGood = () => {
        setGood(good + 1);
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1);
    }
    const handleBad = () => {
        setBad(bad + 1);
    }

    // Function to determine the message based on feedback counts and total feedback count
    const getMessage = () => {
        if (total === 0){
          return " NO FEEDBACK YET"
        }else if (good > neutral && good > bad) {
          return " Mostly Good 👍 "
        }else if (neutral > good && neutral > bad) {
          return " Mostly Neutral 😐"
        } else if (bad > good && bad > neutral) {
          return " Mostly Bad👎"
        } else {return " MIXED FEEDBACK"}
      }


    return (
        <>      
            <div style={{ textAlign: 'center', marginTop: '50px' }} className='feedback-container'>
                <h1>Give Feedback</h1>
                <button onClick={handleGood} className='feedback-btn'>👍 Good</button>
                <button onClick={handleNeutral} className='feedback-btn'>😐 Neutral</button>
                <button onClick={handleBad} className='feedback-btn'>👎 Bad</button>

                <h2>Statistics</h2>
                <div className="progress-bars">
                    <div className="progress-bar good" style={{ width: `${(good / total) * 100 || 0}%` }}> 
                        {good > 0 && `${Math.round((good / total) * 100)}% Good`}
                    </div>
                    <div className="progress-bar neutral" style={{ width: `${(neutral / total) * 100 || 0}%` }}>
                         {neutral > 0 && `${Math.round((neutral / total) * 100)}% Neutral`}
                    </div>
                    <div className="progress-bar bad" style={{ width: `${(bad / total) * 100 || 0}%` }}> 
                        {bad > 0 && `${Math.round((bad / total) * 100)}% Bad`}
                    </div>
                </div>
             </div>

             <h3>Total:{getMessage()}</h3>
        </>
    )
}

export default Feedback;