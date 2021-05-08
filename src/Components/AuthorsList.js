import React from 'react';
import { Author } from './Author';
import { authorsApi } from '../rest/AuthorsApi.js';

export class AuthorsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }

    fetchAuthors = async () => {
        console.log('this is inside AuthorsList fetchAuthors')
        const authors = await authorsApi.get();
        this.setState({ authors });
    };

    addNewAuthor = async (author) => {
        await authorsApi.post(author);
        this.fetchAuthors();
    }

    deleteAuthor = async (author) => {
        await authorsApi.delete(author);
        this.fetchAuthors();
    }

    updateAuthor = async (updatedAuthor) => {
        console.log('this is inside AuthorsList updateAuthor');
        await authorsApi.put(updatedAuthor);
        this.fetchAuthors();
    };

    componentDidMount() {
        this.fetchAuthors();
    };

    render() {
        let authorsList = this.state.authors.map ((author) =>
            <Author
                author={author}
                key={author._id}
                updateAuthor={this.updateAuthor}
                deleteAuthor={this.deleteAuthor}

            />)
        return (
            <div>
                { authorsList }
            </div>
        )
    }
}