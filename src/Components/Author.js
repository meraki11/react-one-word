import React from 'react';
import { NewWordForm } from './NewWordForm';  
import { NewAuthorForm } from './NewAuthorForm';  

export const Author = (props) => {
    console.log('this is inside the Author function');
    console.log(props);
    const { author, updateAuthor } = props;
    const { authorsList, updateAuthorsList } = props;
    
    const deleteWord = (wordId) => {
        console.log('this is inside the deleteWord function');
        console.log(wordId);

        const updatedAuthor = {
            ...author,
            words: author.words.filter((x) => x._id !== wordId)
        };
        updateAuthor(updatedAuthor);
    }

    const deleteAuthor = (authorId) => {
        console.log('this is inside the deleteAuthor function');
        console.log(authorId);

        const updatedAuthorsList = {
            ...authorsList,
            authors: authorsList.authors.filter((x) => x._id !==authorId)
        };
        updateAuthorsList(updatedAuthorsList);
    }

    const addNewWord = (word) => {
        console.log('this is inside addNewWord function');
        console.log(word);
        updateAuthor({...author, words: [...author.words, word]});
    }

    const addNewAuthor = (author) => {
        console.log('this is inside addNewAuthor function');
        console.log(author);
        updateAuthorsList({...authorsList, authors: [...authorsList.authors, author]});
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

    const authors = () => (
        <ul>
            {authorsList.authors.map((author, index) => (
                <li key={index}>
                    <label> {`${author.name}`}</label>
                    <button onClick={(e) => deleteAuthor(author._id)}>Remove Author</button>
                </li>
            ))}
        </ul>
    );
    
    return (
        <div>
            <div>
                <NewAuthorForm addNewAuthor={addNewAuthor} />
            </div>
            <h1>{author.name}</h1>
            { 
                authors({ authors, authorId: author._id, deleteAuthor })
            }
            {
                words({ words, authorId: author._id, deleteWord })
            }
            <NewWordForm addNewWord={addNewWord} />
        </div>
    );
};

