<template>
    <div>
        <label class="text-sm relative pt-8">
            <input 
                :type="type"
                :value="value"
                :disabled="isDisabled"
                @input="$emit('input', $event.target.value)"

                class="bg-black/20 rounded-lg py-2 px-3 font-light text-sm w-full"
            >
            <span class="font-light pl-3 pb-1 absolute left-0 top-0" v-if="label">{{ label }}</span>
        </label>
    </div>
</template>
<script>
export default {
    name: 'BaseInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
}
</script>