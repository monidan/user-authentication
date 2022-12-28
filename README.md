# User authentication process

Small side-project which allows you to configure signing-up and signing-in process of users.

**Technologies used:**

  Front-end
  - vue@3.2.4
  - tailwindcss
  - vuelidate
  - vue-router
  - vuex
  
  Back-end
  - fastify@3.2.1
  - bcrypt
  
  Database
  - firebase (cloud firestore)
  
  Bundling
  - vite@3.2.1

## Project goals

1. Practice back-end and cloud technologies.
2. Built the whole system from the scratch.
3. Practice front-end authentication processing.

## Start project

1. Install dependencies:
`pnpm install`

2. Create your own firebase cloudstore and get your own JSON firebase account filekey into `${PROJECT_ROOT}/config/firebaseAccountSettings.json` ([how to do it](https://firebase.google.com/docs/firestore/quickstart#initialize))

3. Launch front-end and back-end instances: 
```bash
pnpm start:frontend
pnpm start:backend
```
