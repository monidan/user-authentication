<template>
    <section class="flex justify-center items-center h-screen">
        <div class="flex flex-col gap-y-6 items-center bg-black/20 backdrop-blur-sm py-8 px-6 rounded-lg shadow-md">
            <h1 class="font-light text-4xl tracking-wide text-white">
                Greetings to you, my dear User!
            </h1>

            <div class="flex gap-x-2 min-w-full">
                <router-link to="/log-in" class="text-xl font-light hover:bg-white/20 hover:border-white/20 transition-all duration-300 text-center border flex-grow rounded py-2 border-green-600 text-white">
                    Log in
                </router-link>

                <router-link to="/sign-up" class="text-xl font-light hover:bg-green-600/50 hover:text-gray-200 transition-all duration-300 text-center border flex-grow rounded py-2 border-green-600 bg-green-600/30 text-white">
                    Sign up
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'StartingPage',
}
</script>