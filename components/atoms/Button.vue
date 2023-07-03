<template>
    <component :is="tag" :class="buttonClass">
        <slot name="prefix" />
        <slot />
        <svg v-if="loading" class="inline w-4 h-4 ml-auto animate-spin" viewBox="0 0 100 101" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"></path>
        </svg>
        <slot name="suffix" />
    </component>
</template>

<script setup>


const { loading = false, tag = "button", category = "default", size = "md", decoration = "default", color = "red", hover = true, noDefaultAttrsClass = false, rounded = true } = defineProps({
    tag: String,
    category: String,
    size: [String, Boolean],
    decoration: String,
    color: [String, Boolean],
    hover: [String, Boolean, Object],
    rounded: [String, Boolean],
    noDefaultAttrsClass: Boolean,
    loading: [Boolean, String],
})

const slots = useSlots()

const buttonColorClasses = {
    default: {
        default: {
            blue: 'text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800',
            dark: 'text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700',
            green: 'text-white bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800',
            red: 'text-white bg-red-700 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-900',
            yellow: 'text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
            purple: 'text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:focus:ring-purple-900',
            pink: 'text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:focus:ring-pink-900',
        },
        hover: {
            blue: 'hover:bg-blue-800 dark:hover:bg-blue-700',
            dark: 'hover:bg-gray-900 dark:hover:bg-gray-700',
            green: 'hover:bg-green-800 dark:hover:bg-green-700',
            red: 'hover:bg-red-800 dark:hover:bg-red-700',
            yellow: 'hover:bg-yellow-500',
            purple: 'hover:bg-purple-800 dark:hover:bg-purple-700',
            pink: 'hover:bg-pink-800 dark:hover:bg-pink-700',
        }
    },
    outline: {
        default: {
            dark: 'text-gray-900 -outline-offset-1 outline-1 outline outline-gray-800 focus:ring-4 focus:ring-gray-300 dark:outline-gray-600 dark:text-gray-400 dark:focus:ring-gray-800',
            blue: 'text-blue-700 -outline-offset-1 outline-1 outline outline-blue-700 focus:ring-4 focus:ring-blue-300 dark:outline-blue-500 dark:text-blue-500 dark:focus:ring-blue-800',
            green: 'text-green-700 -outline-offset-1 outline-1 outline outline-green-700 focus:ring-4 focus:ring-green-300 dark:outline-green-500 dark:text-green-500 dark:focus:ring-green-800',
            purple: 'text-purple-700 -outline-offset-1 outline-1 outline outline-purple-700 focus:ring-4 focus:ring-purple-300 dark:outline-purple-400 dark:text-purple-400 dark:focus:ring-purple-900',
            pink: 'text-pink-700 -outline-offset-1 outline-1 outline outline-pink-700 focus:ring-4 focus:ring-pink-300 dark:outline-pink-400 dark:text-pink-400 dark:focus:ring-pink-900',
            red: 'text-red-700 -outline-offset-1 outline-1 outline outline-red-700 focus:ring-4 focus:ring-red-300 dark:outline-red-500 dark:text-red-500 dark:focus:ring-red-900',
            yellow: 'text-yellow-400 -outline-offset-1 outline-1 outline outline-yellow-400 focus:ring-4 focus:ring-yellow-300 dark:outline-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900',
        },
        hover: {
            dark: 'hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600',
            blue: 'hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600',
            green: 'hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600',
            purple: 'hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500',
            pink: 'hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500',
            red: 'hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600',
            yellow: 'hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400',
        },

    },
    gradient: {
        default: {
            'cyan-blue': 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
            'green-blue': 'text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
            'pink-orange': 'text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
            'purple-blue': 'text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
            'purple-pink': 'text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
            'red-yellow': 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400',
            'teal-lime': 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
            blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
            cyan: 'text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
            green: 'text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
            lime: 'text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
            pink: 'text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
            purple: 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
            red: 'text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
            teal: 'text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
        },
        hover: {
            'cyan-blue': 'hover:bg-gradient-to-bl',
            'green-blue': 'hover:bg-gradient-to-bl',
            'pink-orange': 'hover:bg-gradient-to-bl',
            'purple-blue': 'hover:bg-gradient-to-bl',
            'purple-pink': 'hover:bg-gradient-to-l',
            'red-yellow': 'hover:bg-gradient-to-bl',
            'teal-lime': 'hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200',
            blue: 'hover:bg-gradient-to-br',
            cyan: 'hover:bg-gradient-to-br',
            green: 'hover:bg-gradient-to-br',
            lime: 'hover:bg-gradient-to-br',
            pink: 'hover:bg-gradient-to-br',
            purple: 'hover:bg-gradient-to-br',
            red: 'hover:bg-gradient-to-br',
            teal: 'hover:bg-gradient-to-br',
        },
    },
}

const buttonSizeClasess = {
    default: {
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-5 py-2.5',
        xl: 'text-base px-6 py-3',
    },
    square: {
        xs: 'text-xs p-1',
        sm: 'text-sm p-1.5',
        md: 'text-sm p-2',
        lg: 'text-base p-2.5',
        xl: 'text-base p-3',
    }
};

const buttonRoundedClasess = {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    default: 'rounded',
    full: 'rounded-full'
};

const buttonHoverClass = computed(() => {
    if (!hover) return ''
    if (typeof hover === Object) return buttonColorClasses[hover.decoration ?? decoration].hover[hover.color ?? color]
    if (hover === true) return buttonColorClasses[decoration].hover[color]
    return buttonColorClasses[decoration].hover[hover]
})

const defaultClass = computed(() => {
    if (noDefaultAttrsClass) return ''

    const classes = 'flex items-center transition-all duration-500 ease-linear gap-1 [&_.icon]:shrink-0'

    if ((slots.prefix || slots.suffix)) return `${classes} justify-between`
    return `${classes} justify-center`
})

const roundedClass = computed(() => {
    if (!rounded) return ''
    if (rounded === true) return buttonRoundedClasess['default']
    if (rounded == 'auto') return buttonRoundedClasess[size]
    return buttonRoundedClasess[rounded]
})

const buttonClass = computed(() => {
    return [
        defaultClass.value,
        roundedClass.value,
        color && buttonColorClasses[decoration].default[color],
        size && buttonSizeClasess[category][size],
        buttonHoverClass.value
    ]
});

</script>
