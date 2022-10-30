import Start from '/views/Start.vue';

export default [
    {
        path: '/',
        component: Start,
    },
    {
        path: '/log-in',
        component: () => import('/views/LogIn.vue')
    },
    {
        path: '/sign-up',
        component: () => import('/views/SignUp.vue')
    }
]