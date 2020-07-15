import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
            Authorization: 
                'Client-ID i3gqU9SlI1sA_Prp2rPX9KKuJwaidpA55jlyuqbf2uA'
        }
});