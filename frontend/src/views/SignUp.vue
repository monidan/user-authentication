<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div>
            <form class="flex flex-col gap-y-2">
                <div>
                    <label class="flex flex-col items-start">
                        <span>Name</span>
                        <input 
                            type="text" 
                            id="name" 
                            @blur="v$.name.$touch" 
                            v-model="form.name" 
                            class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300"
                            :class="{ 'border-red-600 focus:shadow-red-600/40': v$.name.$error }"
                        >
                        <p><small class="text-red-600" v-show="v$.name.$error">Name is required to enter!</small></p>
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>Surname</span>
                        <input 
                            type="text" 
                            id="surname" 
                            @blur="v$.surname.$touch" 
                            v-model="form.surname" 
                            class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300"
                            :class="{ 'border-red-600 focus:shadow-red-600/40': v$.surname.$error }"    
                        >
                        <p><small class="text-red-600" v-show="v$.surname.$error">Surname is required to enter!</small></p>
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>E-mail</span>
                        <input 
                            type="email" 
                            id="e-mail" 
                            @blur="v$.email.$touch" 
                            v-model="form.email" 
                            class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300"
                            :class="{ 'border-red-600 focus:shadow-red-600/40': v$.email.$error }"    
                        >
                        <p v-show="v$.email.$errors.length > 0">
                            <small class="text-red-600" v-show="v$.email.email.$invalid">Email is not valid!</small>
                            <small class="text-red-600" v-show="v$.email.required.$invalid">Email is required to enter!</small>
                        </p>
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>Password</span>
                        <input 
                            type="password" 
                            id="password" 
                            @blur="v$.password.$touch" 
                            v-model="form.password" 
                            class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300"
                            :class="{ 'border-red-600 focus:shadow-red-600/40': v$.password.$error }"    
                        >
                        <p><small class="text-red-600" v-show="v$.password.$error">Password is required to enter!</small></p>
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>Confirm password</span>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            @blur="v$.confirmedPassword.$touch" 
                            v-model="form.confirmedPassword" 
                            class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300"
                            :class="{ 'border-red-600 focus:shadow-red-600/40': v$.confirmedPassword.$error }"    
                        >
                        <p><small class="text-red-600" v-show="v$.confirmedPassword.$error">Passwords should match!</small></p>
                    </label>
                </div>
            </form>

            <div class="pt-4 min-w-full">
                <button 
                    @click="signUp"
                    :disabled="!isFormValid"
                    class="min-w-full text-center border flex-grow rounded py-2 uppercase text-sm"
                    :class="{
                        'border-green-700 text-white bg-green-700': isFormValid,
                        'border-black/30 text-black opacity-50 bg-white': !isFormValid
                    }"
                >
                    Register
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';

export default {
    name: 'SignUp',
    setup() {
        const form = reactive({
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmedPassword: '',
        })

        const rules = computed(() => ({
            name: { required },
            surname: { required },
            email: { required, email },
            password: { required },
            confirmedPassword: {
                sameAs: sameAs(form.password),
            },
        }));

        const v$ = useVuelidate(rules, form);

        return { form, v$ };
    },
    computed: {
        isFormValid() {
            console.log(this.v$)
            return !this.v$.$errors.length && this.v$.$dirty;
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('signUpUser', this.form);
        }
    }
}
</script>