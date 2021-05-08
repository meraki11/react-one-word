import React from 'react';
import { Author } from './Author';
import { authorsApi } from '../rest/AuthorsApi.js';

export class AuthorsList extends React.Component {
    state= {
        authors: []
    };
    
    componentDidMount() {
        this.fetchAuthors();
    };

    fetchAuthors = async () => {
        console.log('this is inside fetchAuthors')
        const authors = await authorsApi.get();
        console.log('line 17');
        this.setState({ authors });
        console.log(authors);
    };

    updateAuthors = async (updatedAuthors) => {
        console.log('this is inside updateAuthors');
        await authorsApi.put(updatedAuthors);
        this.fetchAuthors();
    };

    render() {
        return (
            <div className='authors-list'>
                {this.state.authors.map((author) => (
                    <Author
                        author={author}
                        key={author._id}
                        updateAuthor={this.updateAuthors}
                    />
                ))}
            </div>
        )
    }
}
