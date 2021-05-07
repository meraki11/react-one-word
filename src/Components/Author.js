import React from 'react';
import { NewWordForm } from './NewWordForm'; 

export const Author = (props) => {
    const { author, updateAuthor } = props;
    
    const deleteWord = (wordId) => {
        console.log('this is inside the deleteWord function');
        console.log(wordId);

        const updatedAuthors = {
            ...author,
            words: author.words.filter((x) => x._id !== wordId)
        };
        updateAuthor(updatedAuthors);
    }

    const addNewWord = (word) => {
        console.log('this is inside addNewWord function');
        console.log(word);
        updateAuthor({...author, words: [...author.words, word]});
    }

    const words = () => (
        <ul>
            {author.words.map((word, index) => (
                <li key={index}>
                    <label> {`${word.name} Date: ${word.date}`}</label>
                    <button onClick={(e) => deleteWord(word._id)}>Remove Word</button>
                </li>
            ))}
    
        </ul>
    );
    
    

    return (
        <div>
            <h1>{author}</h1>
            {
                words({ words, authorId: author._id, deleteWord })
            }
            <NewWordForm addNewWord={ addNewWord } />
        </div>
    );
};

