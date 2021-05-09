import React, { useState } from 'react';

export const NewWordForm = (props) => {
    console.log('NewWordForm props');
    console.log(props);
    const [word, setWord] = useState('');
    const [date, setDate] = useState('');

    // function handleWordInput(e) {
    //     setWord( e.target.value );
    // }

    // function handleDateInput(e) {
    //     const int = parseInt(e.target.value, 10);
    //     setDate(int >= 0 ? int : '');
    // }

    const onSubmit = (e) => {
        props.addNewWord(setWord, setDate);
        console.log(e);console.log('got inside NewWordForm OnSubmit');
        console.log('props NewWordForm');
        console.log(props);
        e.preventDefault();

        // if (word && date) {
        //     let author = {
        //     ...props.author, 
        //     words: [...props.authors.words, { word: word, date: date}]
        //     };
        //     delete author._id;
        //     setWord('');
        //     setDate('');
        //     console.log(word);
        //     console.log(date);
        // }   else {
        //     console.log('not a valid entry');
        // }
    };

    return (
        <div className="word-form">
            <h4>Add your one word</h4>
            <form>
                <input
                    type="text"
                    placeholder="word"
                    onChange={(e) => setWord( e.target.value )}
                    value={word}
                />
                <input
                    type="date"
                    placeholder="date"
                    onChange={(e) => setDate(e.target.value )}
                    value={date}
                    format='MM-dd-yyyy'
                />
                <button type='submit' onSubmit={onSubmit}>Add your word</button>
            </form>
        </div>
    )
};


