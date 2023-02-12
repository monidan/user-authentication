<template>
    <div>
        <transition name="fade-in" mode="out-in">
            <div v-if="isShown" class="absolute right-5 top-0">
                <div>
                    <!-- todo: handle notification type -->
                    <!-- todo: svg -->
                    <!-- todo: handle notification text -->
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'NotificationPopup',
    props: ['isShown', 'notificationText', 'notificationType']
}
</script>