<template>
    <ClientOnly>
        <Teleport to="body">
            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0"
                enter-active-class="transition-opacity duration-500 easy-linear"
                leave-active-class="transition-opacity duration-500 easy-linear">
                <template v-if="isShow">
                    <div :class="modalOverlayClass" @click="closeModal">
                        <div tabindex="-1" :class="modalWrapperClass">
                            <!-- Modal content -->
                            <div v-bind="$attrs" :class="modalClass">
                                <!-- Modal header -->
                                <div :class="modalHeaderClass">
                                    <slot name="header" />
                                    <button @click="closeModal" type="button"
                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <slot name="close-icon">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </slot>
                                    </button>
                                </div>
                                <!-- Modal body -->
                                <div class="p-4" :class="$slots.header ? '' : 'pt-0'">
                                    <slot />
                                </div>
                                <!-- Modal footer -->
                                <div v-if="$slots.footer"
                                    class="p-6 rounded-b border-gray-200 border-t dark:border-gray-600">
                                    <slot name="footer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Transition>
        </Teleport>
    </ClientOnly>
</template>

<script setup>
defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])

const { headerClass: modalHeaderClassProps, overlayClass: modalOverlayClassProps, noDefaultAttrsClass = false, size = '2xl', isShow = false, wrapperClass: modalWrapperClassProps, innerClass: modalInnerClassProps } = defineProps({
    overlayClassverlayClass: String,
    wrapperClass: String,
    headerClass: String,
    noDefaultAttrsClass: Boolean,
    isShow: Boolean,
    size: [String, Boolean]
})

const { checkDefaultClass } = useHelper()
const slots = useSlots()

const modalOverlayClass = computed(() => {
    return [
        checkDefaultClass(modalOverlayClassProps, 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40')
    ]
})

const modalInnerClasses = {
    size: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
    }
}


const modalHeaderClass = computed(() => {
    return [
        checkDefaultClass(modalInnerClassProps, `p-4 rounded-t flex justify-between items-center ${slots.header ? 'border-b border-gray-200 dark:border-gray-600' : ''}`),
    ]
})

const modalClass = computed(() => {
    return [
        noDefaultAttrsClass || 'relative bg-white rounded-lg shadow dark:bg-gray-700 w-[calc(100%-var(--widthContentMargin)*2)]',
        size && modalInnerClasses.size[size]
    ]
})

const modalWrapperClass = computed(() => {
    return [
        checkDefaultClass(modalWrapperClassProps, 'overflow-y-auto overflow-x-hidden fixed z-50 min-h-screen w-full py-6 justify-center items-center flex'),
    ]
})

const closeModal = () => {
    emit('close')
}
</script>

