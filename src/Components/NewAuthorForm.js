import React, { useState } from 'react';

export const NewAuthorForm = (props) => {
    const [author, setAuthor] = useState('');

    const onSubmit = (e) => {
        
        if (author) {
            props.addNewAuthor({author});
            setAuthor('');
            console.log(author);
        }   else {
            console.log('not a valid entry');
        }
        e.preventDefault();
    };

    return (
        <div>
            <h4>Author's Name</h4>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Author's name"
                    onChange={ (e) => setAuthor(e.target.value) }
                    value={ author }
                />
                <button type='submit'>Add your name</button>
            </form>
        </div>
    )
};