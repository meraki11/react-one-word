import React from 'react';
import { Author } from './Author';
import { authorsApi } from '../rest/AuthorsApi.js';
import { NewAuthorForm } from './NewAuthorForm';
import { NewWordForm } from './NewWordForm';

export class AuthorsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
        // this.addNewAuthor = this.addNewAuthor.bind(this);
        // this.deleteAuthor = this.deleteAuthor.bind(this);
        // this.updateAuthor = this.updateAuthor.bind(this);
    }

    fetchAuthors = async () => {
        console.log('this is inside fetchAuthors')
        const json = await authorsApi.get();
        console.log('line 17');
        this.setState({ authors: json });
    };

    // addNewAuthor = async (author) => {
    //     await authorsApi.post(author);
    //     this.fetchAuthors();
    // }

    deleteAuthors = async (id) => {
        await authorsApi.delete(id);
        this.fetchAuthors();
    }

    updateAuthors = async (id, updatedAuthors) => {
        console.log('this is inside updateAuthors');
        await authorsApi.put(id, updatedAuthors);
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
                updateAuthor={this.updateAuthors}
                deleteAuthor={this.deleteAuthors}

            />)
        return (
            <div>
                { authorsList }
            </div>
        )
    }
}