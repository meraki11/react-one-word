const AUTHORS_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class AuthorsApi2 { 
    get = async () => {
        try {
            const resp = await fetch(AUTHORS_ENDPOINT);
            const data = await resp.json();
            return data;
        }   catch (e) {
            console.log('Oops, looks like fetchAuthors had an issue.', e);
        }
    } 

    post = fetch(`${AUTHORS_ENDPOINT}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Palace"
        })
    });
    

    put = fetch(`${AUTHORS_ENDPOINT}/60957296cd3c1400178af1ca`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Palace",
            rooms: [
                { name: "Bath", area: 100 },
                { name: "Laundry", area: 200 },
            ],
        }),    
    });
}
export const authorsApi2 = new AuthorsApi2();