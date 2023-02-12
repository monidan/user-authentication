<template>
    <div>
        <!-- START: INPUT -->
        <label class="text-sm relative pt-8">
            <input 
                :type="type"
                :value="modelValue || value"
                :disabled="isDisabled"
                @input="$emit('update:modelValue', $event.target.value)"
                @blur="$emit('blur')"

                class="bg-black/20 rounded-lg py-2 px-3 font-light text-sm w-full outline-none transition-all duration-300"
                :class="{
                    'bg-black/10 border border-white/20 focus:shadow-straight focus:shadow-white/20 peer': !isDisabled,
                    'bg-black/20': isDisabled,
                    '!border-red-400/50 bg-red-400/10': error,
                    'border-green-400/60 bg-green-400/10': !error && modelValue,
                }"
            >
            <span 
                class="font-light pl-3 pb-1 transition-all duration-300 absolute peer-focus:top-0" 
                :class="{
                    'left-0 top-0': isDisabled,
                    'left-0 top-[30px]': !isDisabled,
                    '!top-0': modelValue
                }"
                v-if="label"
            >
                {{ label }}
            </span>
        </label>
        <!-- END: INPUT -->

        <!-- START: ERROR STATE TEXT -->
        <div class="pt-2" v-show="error">
            <div class="border border-red-400/50 bg-red-200/20 rounded-lg bg-blend-overlay flex items-center backdrop-blur-sm">
                <div class="pl-2">
                    <div class="bg-red-400/50 w-5 h-5 rounded-full flex items-center justify-center text-black">
                        <svg  width="100%" height="100%" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_25_26)">
                                <path d="M4.58332 7.25008H5.41669V8.08342H4.58332V7.25008ZM4.58331 2H5.41665L5.41669 6.41675H4.58332L4.58331 2Z" fill="currentColor"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_25_26">
                                    <rect width="10" height="10" fill="currentColor"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <p class="pl-3 py-1 text-red-400">
                    <small>
                        {{ errorText }}
                    </small>
                </p>
            </div>
        </div>
        <!-- END: ERROR STATE TEXT -->
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
        modelValue: {
            default: null
        },
        value: {
            default: '',
        }, 
        isDisabled: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
        errorText: {
            type: String,
            default: 'Error!'
        }
    },
}
</script>