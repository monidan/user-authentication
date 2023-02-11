import Start from '/views/Start.vue';

export default [
    {
        path: '/',
        name: 'Start',
        component: Start,
    },
    {
        path: '/log-in',
        name: 'LogIn',
        component: () => import('/views/LogIn.vue')
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('/views/SignUp.vue')
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: () => import('/views/UserProfile.vue')
    }
]