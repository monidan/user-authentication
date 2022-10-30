<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div>
            <form class="flex flex-col gap-y-2">
                <div>
                    <label class="flex flex-col items-start">
                        <span>Name</span>
                        <input type="text" id="name" v-model="form.name" class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300">
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>Surname</span>
                        <input type="text" id="surname" v-model="form.surname" class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300">
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>E-mail</span>
                        <input type="email" id="e-mail" v-model="form.email" class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300">
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>Password</span>
                        <input type="password" id="password" v-model="form.password" class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300">
                    </label>
                </div>

                <div>
                    <label class="flex flex-col items-start">
                        <span>Confirm password</span>
                        <input type="type" id="confirm-password" v-model="form.confirmedPassword" class="rounded border border-blue-700 py-1 pl-2 outline-none focus:shadow-straight focus:shadow-blue-700/30 transition-all duration-300">
                    </label>
                </div>
            </form>

            <div class="pt-4 min-w-full">
                <button 
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
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

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

        const rules = {
            name: { required },
            surname: { required },
            email: { required, email },
            password: { required },
            confirmedPassword: { required },
        }

        const v$ = useVuelidate(rules, form);

        return { form, v$ };
    },
    computed: {
        isFormValid() {
            return false;
        }
    }
}
</script>