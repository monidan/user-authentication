import { createStore } from 'vuex';

import signUp from './modules/signup';
import logIn from './modules/login';
import auth from './modules/auth';

const store = createStore({
    modules: {
        auth,
        signUp,
        logIn,
    }
});

export default store;