<template>
    <div class="h-screen container px-4 mx-auto flex items-center justify-start">
        <div>
            <Panel heading="Put there your details to register inside the app :)">
                <div class="sm:max-w-[200px]">
                    <form class="flex flex-col gap-y-8 pt-4">
                        <div>
                            <BaseInput 
                                label="Name"
                                error-text="Name is required!"

                                v-model="form.name"
                                @blur="v$.name.$touch"
                                :error="v$.name.$error"
                            />
                        </div>
    
                        <div>
                            <BaseInput 
                                label="Surname"
                                error-text="Surname is required!"
        
                                v-model="form.surname"
                                @blur="v$.surname.$touch"
                                :error="v$.surname.$error"
                            />
                        </div>
    
                        <div>
                            <BaseInput 
                                label="Email"
                                type="email"
                                error-text="Wrong type of email is provided!"
    
                                v-model="form.email"
                                @blur="v$.email.$touch"
                                :error="v$.email.$error"
                            />
                        </div>
    
                        <div>
                            <BaseInput 
                                label="Password"
                                type="password"
                                error-text="Password is required!"
    
                                v-model="form.password"
                                @blur="v$.password.$touch"
                                :error="v$.password.$error"
                            />
                        </div>
    
                        <div>
                            <BaseInput 
                                label="Confirm Password"
                                type="password"
                                error-text="Passwords does not match!"
    
                                v-model="form.confirmedPassword"
                                @blur="v$.confirmedPassword.$touch"
                                :error="v$.confirmedPassword.$error"
                            />
                        </div>
                    </form>

                    <div class="pt-8 min-w-full">
                        <primary-button
                            @click="signUp"
                            :disabled="!isFormValid"
                        >
                            Register
                        </primary-button>
                    </div>
                </div>
            </Panel>
        </div>
    </div>
</template>
<script>
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';

import Panel from '/components/Panel.vue';
import BaseInput from '/components/Base/bInput.vue';
import PrimaryButton from '/components/Base/PrimaryButton.vue';

export default {
    name: 'SignUp',
    components: {
        Panel,
        BaseInput,
        PrimaryButton,
    },
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
            return !this.v$.$errors.length && this.v$.$dirty;
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('signUpUser', this.form)
                .then(response => {
                    if (response.status == 200) {
                        this.$router.go({ name: 'SuccessfulSignUp' });
                        
                        // todo: store user data to show in user profile
                    } else {
                        // todo: throw notification error
                    }
                })
        }
    }
}
</script>