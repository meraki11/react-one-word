import React, { useState } from 'react';

export const NewAuthorForm = (props) => {
    console.log('NewAuthorForm props');
    console.log(props);
    const [author, setAuthor] = useState('');

    const onSubmit = (e) => {
        console.log(e);
        console.log('got inside NewAuthorForm OnSubmit');
        console.log('props NewAuthorForm');
        console.log(props);
        e.preventDefault();
        if (author) {
            console.log("New Author Name:" + author);
            console.log('props' + props);
            let authorsList = {
            ...props.authorsList, 
            authors: [...props.authorsList.authors, { author: author}]    
            };
            delete authorsList._id;
            setAuthor('');
            console.log(author);
        }   else {
            console.log('not a valid entry');
        }
    };

    return (
        <div>
            <h4>Author's Name</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Authors name"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                <button type='submit'>Add your name</button>
            </form>
        </div>
    )
};