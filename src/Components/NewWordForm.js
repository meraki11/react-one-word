import React, { useState } from 'react';

export const NewWordForm = (props) => {
    console.log('NewWord Form props');
    console.log(props);
    const [word, setWord] = useState('');
    const [date, setDate] = useState('');

    const handleDateInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setDate(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        console.log(e);console.log('got inside NewWordForm OnSubmit');
        console.log('props NewWordForm');
        console.log(props);
        e.preventDefault();
        if (word && date) {
            props.addNewWord({word, date});
            setWord('');
            setDate('');
            console.log(word);
            console.log(date);
        }   else {
            console.log('not a valid entry');
        }
    };

    return (
        <div>
            <h4>Add your one word</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="word"
                    onChange={(e) => setWord(e.target.value)}
                    value={word}
                />
                <input
                    type="date"
                    placeholder="date"
                    onChange={handleDateInput}
                    value={date}
                />
                <button type='submit'>Add your word</button>
            </form>
        </div>
    )
};


