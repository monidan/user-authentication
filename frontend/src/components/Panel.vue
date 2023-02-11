<template>
    <section>
        <div class="backdrop-blur-lg bg-blend-soft-light bg-black/20 rounded-lg px-4 py-6 text-white">
            <header v-if="heading" class="text-xl text-center pb-4 font-brand-heading">
                <h2>{{ heading }}</h2>
            </header>

            <div>
                <slot></slot>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Panel',
    props: ['heading'],
}
</script>