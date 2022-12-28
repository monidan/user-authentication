import { createStore } from 'vuex';

import signUp from './modules/signup';

const store = createStore({
    modules: {
        signUp,
    }
});

export default store;