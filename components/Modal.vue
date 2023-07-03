<template>
    <ClientOnly>
        <Teleport to="body">
            <TransitionGroup enter-from-class="opacity-0" leave-to-class="opacity-0"
                enter-active-class="transition-opacity duration-500 easy-linear"
                leave-active-class="transition-opacity duration-500 easy-linear">
                <template  v-if="isShow">
                    <div :class="ModalOverlayClass"></div>
                    <div @click.self="closeModal" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
                        <div :class="ModalClass" v-bind="$attrs">
                            <Button color="grayscale" type="iconBtn" @click="closeModal"
                                class="absolute right-0 top-0"><nuxt-icon name="feather-icon/x" /></Button>
                            <slot />
                        </div>
                    </div>
                </template>
            </TransitionGroup>
        </Teleport>
    </ClientOnly>
</template>

<script setup>
defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])

const { ModalOverlayClass: ModalOverlayClassProps, noDefaultAttrsClass = false, size = 'xs', isShow = false } = defineProps({
    ModalOverlayClass: String,
    noDefaultAttrsClass: Boolean,
    isShow: Boolean,
    size: [String, Boolean]
})

const { checkDefaultClass } = useHelper()

const ModalOverlayClass = ref([
    checkDefaultClass(ModalOverlayClassProps, 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',)
])

const modalWrapperClasses = {
    size: {
        xs: 'px-25 py-15 w-[600px]'
    }
}

const ModalClass = ref([
    noDefaultAttrsClass || 'relative bg-white rounded-lg shadow dark:bg-gray-700',
    size && modalWrapperClasses.size[size]
])

const closeModal = () => {
    emit('close')
}
</script>

