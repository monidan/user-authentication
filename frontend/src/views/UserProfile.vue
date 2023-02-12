<template>
    <section class="h-screen flex  items-center container px-4 mx-auto">
        <div class="w-full flex flex-col gap-y-4 md:flex-row md:justify-between">
            <Panel heading="This is your info, buddy! :)" class="md:w-1/2">
                <div class="sm:max-w-[300px]">
                    <div class="flex flex-col gap-y-8 pt-4">
                        <base-input
                            label="Name"
                            :value="name"
                            :isDisabled="true"
                        ></base-input>
        
                        <base-input
                            label="Surname"
                            :value="surname"
                            :isDisabled="true"
                        ></base-input>
        
                        <base-input
                            label="Email"
                            :value="email"
                            :isDisabled="true"
                        ></base-input>
                    </div>
        
                    <div class="pt-6">
                        <primary-button>
                            Change Password
                        </primary-button>
                    </div>
                </div>
            </Panel>
    
            <button class="py-12 bg-black/20 rounded-lg block md:w-1/3 text-black/30 font-brand-heading uppercase tracking-wider text-[64px] transition-all duration-300 hover:text-white hover:bg-black/50">
                Exit
            </button>
        </div>
    </section>
</template>
<script>
import Panel from '/components/Panel.vue';
import BaseInput from '/components/Base/bInput.vue';
import PrimaryButton from '/components/Base/PrimaryButton.vue';

export default {
    name: 'UserProfile',
    components: {
        Panel,
        BaseInput,
        PrimaryButton,
    },
    data() {
        return {
            name: 'Daniel',
            surname: 'Horokhov',
            email: 'horokhovbusiness@gmail.com',
        }
    }
}
</script>