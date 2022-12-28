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

            console.log(userData)

            fetch(`${BASE_ENDPOINT_URL}/sign-up`, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password
                })
            })
            .then((data) => data.json())
            .then(data => console.log(data))
        }        
    }
}

export default signUp;