import { BASE_ENDPOINT_URL } from '../constants/baseEndpoint';

const signUp = {
    actions: {
        signUpUser(module, userData) {
            const {
                name,
                surname,
                email,
                password,
            } = userData;

            return fetch(`${BASE_ENDPOINT_URL}/sign-up`, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password
                })
            })
        }        
    }
}

export default signUp;