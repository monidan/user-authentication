import { BASE_ENDPOINT_URL } from '../constants/baseEndpoint';

const logIn = {
    actions: {
        logInUser({ commit }, credentials) {
            const { email, password } = credentials;
            
            const headers = new Headers();

            headers.append('Authorization', 'Basic ' + window.btoa(`${email}:${password}`));

            return fetch(`${BASE_ENDPOINT_URL}/log-in`, {
                method: 'GET',
                headers,
            })
            .then(response => response.json())
            .then(({ userData, authToken }) => {
                commit('setUserData', userData);
                commit('setAuthToken', authToken);
            })
            .catch(err => console.error('error', err))
        }
    }
}

export default logIn;