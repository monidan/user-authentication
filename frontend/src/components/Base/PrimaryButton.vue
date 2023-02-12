<template>
    <button 
        class="w-full py-2 border border-white rounded-lg transition-all duration-300 text-sm"
        :class="{
            'bg-white/30 text-black/30 border-0': disabled,
            'hover:bg-white/[0.15] hover:border-white hover:text-white': !disabled
        }"

        @click="$emit('click')"
        :disabled="disabled"
        :type="type"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'PrimaryButton',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'button',
        }
    }
}
</script>