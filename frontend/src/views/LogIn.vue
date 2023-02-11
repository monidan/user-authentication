<template>
    <section class="overflow-hidden">
        <div>
            <div class="h-screen w-screen flex items-center">
                <div class="container px-4 mx-auto flex justify-center md:justify-between md:items-center">
                    <div class="hidden relative rounded-full sm:w-[300px] sm:h-[300px] xl:w-[766px] xl:h-[766px] sm:flex items-center justify-center xl:-ml-20 backdrop-blur-sm">
                        <div class="rounded-full border-t border-[#5200FF] absolute inset-0 z-10 animate-[spin_2s_linear_infinite]"></div>
                        <div class="rounded-full border absolute inset-0 mix-blend-multiply"></div>

                        <div class="text-white text-5xl italic font-extralight">
                            <h1>Hello!</h1>
                        </div>
                    </div>

                    <div class="sm:w-1/2 xl:w-1/3">
                        <header>
                            <h2 class="text-right font-extralight text-4xl text-white leading-[44px]">Fill in your account credentials.</h2>
                        </header>

                        <div class="pt-5 lg:pt-8">
                            <form class="flex flex-col gap-y-6 md:gap-y-9">
                                <label class="relative flex items-center">
                                    <input v-model="email" type="email" class="form-input w-full h-[50px] rounded-lg shadow-inner-lg pl-4 outline-none border border-transparent focus:border-[#895FE0] transition-all duration-300">
                                    <span class="absolute text-[#555555] left-4" :class="{ 'opacity-0': email.length }">Email</span>
                                </label>

                                <label class="relative flex items-center">
                                    <input v-model="password" type="password" class="form-input w-full h-[50px] rounded-lg shadow-inner-lg pl-4 outline-none border border-transparent focus:border-[#895FE0] transition-all duration-300">
                                    <span class="absolute text-[#555555] left-4" :class="{ 'opacity-0': password.length }">Password</span>
                                </label>

                                <div class="flex justify-between items-center">
                                    <a role="button" class="text-white hover:underline block flex-grow">Forgot password?</a>
                                    <a 
                                        @click="logIn"
                                        role="button" 
                                        class="group uppercase text-white border rounded-lg py-2 text-center lg:py-3 px-10 lg:px-14 relative overflow-hidden before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-white before:w-0 hover:before:w-full before:transition-all before:duration-300"
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