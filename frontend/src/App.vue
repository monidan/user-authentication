<template>
    <section class="h-screen">
        <BackgroundBubbles class="overflow-hidden" />

        <main class="z-10">
            <router-view></router-view>
        </main>
    </section>
</template>
<script>
import BackgroundBubbles from '/components/BackgroundBubbles.vue';

import { isExcludedPage } from '/shared/js/utilities/isExcludedPage';

export default {
    name: 'App',
    components: {
        BackgroundBubbles,
    },
    methods: {
        /**
         * Checks if the current page is should be excluded.
         * @param  {...String} pages - The pages names to check for
         * @returns {Boolean} - True if the current page is excluded, false otherwise
         */
        checkForExcludedPages(...pages) {
            return isExcludedPage(this.$route, ...pages);
        }
    }
}
</script>