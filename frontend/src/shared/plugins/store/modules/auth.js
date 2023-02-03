import { setDataInLocalStorage } from "/shared/js/utilities/localStorage";

const auth = {
    state: () => ({
        user: {},
        authToken: '',
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