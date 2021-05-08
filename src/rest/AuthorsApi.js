const AUTHORS_ENDPOINT = 'https://crudcrud.com/api/f3e0db214d054a62b515d20fc956b681/authors';

class AuthorsApi {
    
    get = async () => {
        try {
            const resp = await fetch(AUTHORS_ENDPOINT);
            const data = await resp.json();
            return data;
        }   catch (e) {
            console.log('fetchAuthors had an issue and cannot retrieve data', e);
        }
   
    };

    post = async (author) => {
        try {
            const resp = await fetch(AUTHORS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(author)
            });
            return resp.json();
        }   catch (e) {
            console.log('posting authors had an issue', e);
        }
    };

    put = async (author) => {
        console.log('this is inside the put function');
        try {
            const resp = await fetch(`${AUTHORS_ENDPOINT}/${author._id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(author)
            });
            console.log(AUTHORS_ENDPOINT);
            console.log(author._id);
            console.log(resp);
            return await resp.json();
        }   catch (e) {
            console.log('updating authors had an issue', e);
        }
    };

    delete = async (id) => {
        try {
            const resp = await fetch(`${AUTHORS_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            } catch (e) {
            console.log('deleting had an issue', e);
        }
    }
}

export const authorsApi = new AuthorsApi();
