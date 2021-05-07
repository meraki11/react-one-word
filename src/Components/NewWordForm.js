import React, { useState } from 'react';

export const NewWordForm = (props) => {
    const [word, setWord] = useState('');
    const [date, setDate] = useState('');

    const handleDateInput = (e) => {
        let int = parseInt(e.target.value, 10);
        setDate(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        
        if (word && date) {
            props.addNewWord({word, date});
            setWord('');
            setDate('');
            console.log(word);
            console.log(date);
        }   else {
            console.log('not a valid entry');
        }
        e.preventDefault();
    };

    return (
        <div>
            <h4>Add your one word</h4>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="word"
                    onChange={ (e) => setWord(e.target.value) }
                    value={ word }
                />
                <input
                    type="date"
                    placeholder="date"
                    onChange={ handleDateInput }
                    value={ date }
                />
                <button type='submit'>Add your word</button>
            </form>
        </div>
    )
};


