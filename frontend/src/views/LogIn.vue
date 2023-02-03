<template>
    <section class="overflow-hidden">
        <div>
            <div class="h-screen w-screen bg-gradient-to-tr from-[#895FE0]/75 via-[#28A7C3] to-[#93B151] flex items-center">
                <div class="container mx-auto flex lg:justify-between lg:items-center">
                    <div class="relative rounded-full lg:w-[766px] lg:h-[766px] flex items-center justify-center lg:-ml-20">
                        <div class="rounded-full border-t border-[#5200FF] absolute inset-0 z-10 animate-[spin_2s_linear_infinite]"></div>
                        <div class="rounded-full border absolute inset-0 mix-blend-multiply"></div>

                        <div class="text-white text-5xl italic font-extralight">
                            <h1>Hello!</h1>
                        </div>
                    </div>

                    <div class="lg:w-1/3">
                        <header class="text-right">
                            <h2 class="font-extralight text-4xl text-white">Fill in your account credentials.</h2>
                        </header>

                        <div class="lg:pt-8">
                            <form class="flex flex-col gap-y-9">
                                <label class="relative flex items-center">
                                    <input v-model="email" type="email" class="form-input w-full lg:h-[50px] rounded-lg shadow-inner-lg lg:pl-4 outline-none border border-transparent focus:border-[#895FE0] transition-all duration-300">
                                    <span class="absolute text-[#555555] left-4" :class="{ 'opacity-0': email.length }">Email</span>
                                </label>

                                <label class="relative flex items-center">
                                    <input v-model="password" type="password" class="form-input w-full lg:h-[50px] rounded-lg shadow-inner-lg lg:pl-4 outline-none border border-transparent focus:border-[#895FE0] transition-all duration-300">
                                    <span class="absolute text-[#555555] left-4" :class="{ 'opacity-0': password.length }">Password</span>
                                </label>

                                <div class="flex justify-between items-center">
                                    <a role="button" class="text-white hover:underline">Forgot password?</a>
                                    <a 
                                        @click="logIn"
                                        role="button" 
                                        class="group uppercase text-white border rounded-lg lg:py-3 lg:px-14 relative overflow-hidden before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-white before:w-0 hover:before:w-full before:transition-all before:duration-300"
                                    >
                                        <span class="group-hover:text-black relative transition-all duration-300 z-20">Log in</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('logInUser', { email: this.email, password: this.password })
                .then(this.$router.push({ name: 'UserProfile' }));
        }
    }
}
</script>