import { setDataInLocalStorage } from "/shared/js/utilities/localStorage";

const auth = {
    state: () => ({
        user: {},
        authToken: '123',
    }),
    mutations: {
        setUserData(state, data) {
            state.user = data;
        },
        setAuthToken(state, token) {
            state.authToken = token;
            setDataInLocalStorage('token', token);
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.authToken.length;
        },
    }
}

export default auth;