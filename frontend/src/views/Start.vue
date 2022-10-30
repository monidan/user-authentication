<template>
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col gap-y-4 items-center bg-white py-8 px-6 rounded-lg shadow-md">
            <h1 class="font-light text-2xl tracking-widest">
                Greetings to you, my dear User!
            </h1>

            <div class="flex gap-x-2 min-w-full">
                <router-link to="/log-in" class="text-center border flex-grow rounded py-2 border-green-600 uppercase text-sm">
                    Log in
                </router-link>

                <router-link to="/sign-up" class="text-center border flex-grow rounded py-2 uppercase text-sm border-green-600 bg-green-600 text-white">
                    Sign up
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StartingPage',
}
</script>